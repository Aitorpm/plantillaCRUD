var mongoose = require('mongoose');
Schema   = mongoose.Schema;



var userSchema = new Schema({

    name: {type : String},
    email:   { type: String},
    number: {type: String},
    created: {type: Date, default: Date.now}
}, {
    versionKey: false // You should be aware of the outcome after set to false (elimina __V)
});

module.exports = mongoose.model('User', userSchema);