const db = require('../src/database/models');
const sequelize = db.sequelize;
const Users = db.User;

async function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = await Users.findOne({where: {email: emailInCookie}});

    if (userFromCookie) {
        req.session.userlogged = userFromCookie;
    }

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedMiddleware;