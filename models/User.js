/*
 * Model de user
 *
 */

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: {
        type: String,
        unique: true
    },
    age : {
        type: Number
    },
    status: {
        type: Boolean
    },
    notes: {
        type: String

    }

});

module.exports = mongoose.model('Contact', contactSchema);