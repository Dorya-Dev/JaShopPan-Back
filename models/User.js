/*
 * Model de user
 *
 */

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    birthday: String,
    password: String,
    address: String,
    zipcode: Number,
    city: String,
    phone: Number
    
    
});

module.exports = mongoose.model('Contact', contactSchema);