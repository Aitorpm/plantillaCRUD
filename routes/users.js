module.exports = function (app) {
    var mongoose = require('mongoose');
    var User = require('../models/user.js');

    //GET - GET All Users By Into DB
    AllUsers = function (req, res) {
        User.find(function (err, users) {
            if (err) res.send(500, err.message);

            console.log('GET /contactlist')
            res.status(200).json(users);
        });
    };

    //POST - Add User in DB
    addUser = function (req, res) {
        console.log('POST');
        console.log(req.body);

        var users = new User({
            name: {type : String},
            email:   { type: String},
            number: {type: String},
        })

        users.save(function (err, users) {
            if (err) return res.send(500, err.message);
            res.status(200).json(users);

        });
    };

    //endpoints
    app.get('/contactlist/',AllUsers);
    app.post('/contactlist/', addUser);
}