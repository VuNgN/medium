const homeRoute = require('./home/home');

module.exports = function(app) {
    app.use('/', homeRoute);
}