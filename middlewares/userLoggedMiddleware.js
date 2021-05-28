const model = require('../model/model');

const userModel = model('datosUsuarios');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = userModel.findFirstByField('email', emailInCookie);

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