const path = require('path');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../src/database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const Users = db.User;
const Avatars = db.Avatar;
const Addresses = db.Address;
const Roles = db.Role;

let userController = {

    login: (req, res) => {
        
        res.render('user/login');
    },

    register: (req, res) => {
        res.render('user/register');
    },

    shopCart: (req, res) => {
        res.render('user/productCart');
    },

    shopCart2: (req, res) => {
        res.render('user/productCart2');
    },

    recieveFormRegister: async (req, res) =>{
        try {
            // const resultValidation = validationResult(req);
            // let newUserEmail = req.body.email;
            // let userInDb = await Users.findOne({where: {email: newUserEmail}}); 

            // if (resultValidation.errors.length > 0) {
            //     return res.render('user/register', {
            //         errors: resultValidation.mapped(),
            //         oldData: req.body
            //     });
            // }

            // if (userInDb) {
            //     return res.render('user/register', {
            //         errors: {
            //             email: {
            //                 msg: 'Este email ya esta registrado'
            //             }
            //         },
            //         oldData: req.body
            //     });
            // }
            let body = req.body
            body.avatar = req.file ? req.file.filename : '';

            let avatarToCreate = {name: body.avatar};
            let avatarCreated = await Avatars.create(avatarToCreate);

            let addressToCreate = {
                street: req.body.street,
                number: req.body.number
            };

            let addressCreated = await Addresses.create(addressToCreate);

            let userToCreate = {
                ...req.body, 
                password: bcryptjs.hashSync(req.body.password,10),
                avatarId: avatarCreated.id,
                addressId: addressCreated.id,
                roleId: 1
            }
            
            delete userToCreate.passwordConfirm;
    
            let userCreated = await Users.create(userToCreate);
    
            return res.redirect('login');

        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    recieveFormLogin: async (req, res) =>{ 
        let loginEmail = req.body.email;
        let userToLogin = await Users.findOne({where: {email: loginEmail}});

        if (!req.body.email && !req.body.password) {
            return res.render('user/login', {
                errors: {
                    email: {
                        msg: 'Debes completar los campos'
                    },
                    password: {
                        msg: 'Debes completar los campos'
                    }
                }
            })            
        };

        if (userToLogin) {
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;	

                if (req.body.rememberUser) {
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 60})
                }
                return res.redirect('/profile');
			} 
			return res.render('user/login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				}
			});
		};

        return res.render( 'user/login', {
            errors: {
                email: {
                    msg:'No se encuentra registrado este mail'
                }
            }
        })
    },

    modifyForm: async (req, res) =>{
        try {
            let body = req.body
            body.avatar = req.file ? req.file.filename : '';
    
            let user = {id: 1,
                        avatarId: 2,
                        addressId: 2,};

            let avatarToUpdate = {name: body.avatar};
            let avatarUpdated = await Avatars.update(avatarToUpdate, {where: { id: user.avatarId }});
    
            let addressToUpdate = {
                street: req.body.street,
                number: req.body.number
            };
    
            let addressUpdated = await Addresses.update(addressToUpdate, {where: { id: user.addressId }});

            let userToUpdate = {
                username: body.username,
                password: bcryptjs.hashSync(req.body.password,10)
            };

            let userUpdated = await Users.update(userToUpdate, {where: { id: user.id }});

            res.json(userUpdated);

        } catch (error) {
            console.log(error);
            return res.status(500);
        }
    },

    profile: (req, res) => {
        return res.render('user/profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }
};

module.exports = userController;