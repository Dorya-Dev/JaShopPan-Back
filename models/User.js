/*
 * Model de user
 *
 */

const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  birthday: String,
  password: String,
  address: String,
  postcode: String,
  city: String,
  phone: String,
});

module.exports = mongoose.model("User", contactSchema);
