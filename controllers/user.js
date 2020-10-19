const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign({ id: user._id }, "dev", { expiresIn: "24h" });
          res.json({ message: "Connexion réussie", token });
        } else {
          res.status(401).json({ message: "Erreur" });
        }
      } else {
        res.status(401).json({ message: "Erreur" });
      }
    });
  },
  getProfileData: (req, res) => {
    res.json(req.user);
  },
};

module.exports = user;
