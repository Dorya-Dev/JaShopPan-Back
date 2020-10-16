const User = require("../models/User");
const bcrypt = require("bcrypt");

const user = {
  create: (req, res) => {
    const newUser = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      birthday: req.body.birthday,
      password: bcrypt.hashSync(req.body.password, 10),
      address: req.body.address,
      postcode: req.body.postcode,
      city: req.body.city,
      phone: req.body.phone,
    });
    newUser.save((error) => {
      if (error) {
        res.status(500).json({
          message: "not good",
        });
      } else {
        res.json({
          message: "compte créé ",
        });
      }
    });
  },
  login: (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        res.status(500).json({
          message: "not good",
        });
      } else if (user) {
        res.json({ message: " connexion effectuée" });
      } else {
        res.status(401).json({
          message: "compte non trouvé",
        });
      }
    });
  },
};

module.exports = user;
