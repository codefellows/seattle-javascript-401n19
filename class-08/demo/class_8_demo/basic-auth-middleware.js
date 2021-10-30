'use strict';

const base64 = require('base-64');

module.exports = (users) => (req,res,next) => {
    // req.headers.auth -> decode
    console.log('req.headers', req.headers);
if (!req.headers.authorization) { next('Invalid Login'); }

let basic = req.headers.authorization.split(' ').pop();
let [user, pass] = base64.decode(basic).split(':')
console.log(user,pass);
users.authenticateBasic(user, pass)
    .then(validUser => {
        req.user = validUser;
        next();
    })
    .catch (err => next('Invalid Login'));
}