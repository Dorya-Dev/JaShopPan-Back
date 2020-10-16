const Contact = require("../models/User");

const user = {
  contact: (req, res) => {
    const newContact = new Contact({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      birthday: req.body.birthday,
      password: req.body.password,
      address: req.body.address,
      postcode: req.body.postcode,
      city: req.body.city,
      phone: req.body.phone,
    });
    newContact.save((error) => {
      if (error) {
        res.status(500).json({
          message: "not good",
        });
      } else {
        res.json({
          message: "compte créé",
        });
      }
    });
  },
};

module.exports = user;
