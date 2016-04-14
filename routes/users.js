module.exports = function (app) {
    var mongoose = require('mongoose');
    var User = require('../models/user.js');

    //GET - GET All Users By Into DB
    AllUsers = function (req, res) {
        User.find(function (err, users) {
            if (err) res.send(500, err.message);
            console.log('GET /contactlist');
            res.status(200).json(users);
        });
    };

    //GET - Get only a user
    getUser = function(req, res){
        User.findById(req.params.id, function (err, user) {
            console.log('DELETE usuario');
            if (err) res.send(500, err.message);
            console.log('GET /contactlist/:id');
            res.status(200).json(user);

        });
    }

    //POST - Add User in DB
    addUser = function (req, res) {
        console.log('POST');

        var users = new User({
            name: req.body.name,
            email:   req.body.email,
            number: req.body.number,
        })

        users.save(function (err, users) {
            if (err) return res.send(500, err.message);
            res.status(200).json(users);

        });
    };

    //DELETE - Delete a User with specified Name
    deleteUser = function (req, res) {
        User.findById(req.params.id, function (err, user) {
            console.log('DELETE usuario');
            return user.remove(function (err) {
                if (!err) {
                    console.log("usuario eliminado");
                    return res.send('');
                } else {
                    console.log(err);
                }
            });
        });
    }

    //UPDATE - Update a User
    updateUser = function (req,res) {
        User.findById(req.params.id, function (err, user) {
            console.log('PUT');
            console.log(req.params.id);

            user.name = req.body.name;
            user.email = req.body.email;
            user.number = req.body.number;

            user.save(function (err) {
                if (err) return res.send(500, err.message);
                res.status(200).json(user);
            });
        });
    }

    //endpoints
    app.get('/contactlist/',AllUsers);
    app.get('/contactlist/:id',getUser);
    app.post('/contactlist/', addUser);
    app.delete('/contactlist/:id', deleteUser);
    app.put('/contactlist/:id', updateUser);
}