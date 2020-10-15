const Admin = require("../models/Product");

const admin = {
  getProducts: (req, res) => {
    Admin.find({}, "title imagexs price category", (err, products) => {
      if (err) {
        res.status(500).json({
          message: "not good",
        });
      } else {
        res.json(products);
      }
    });
  },
  addProduct: (req, res) => {
    Admin.find({}, "title imagexs price category", (err, products) => {
      if (err) {
        res.status(500).json({
          message: "not good",
        });
      } else {
        res.json(products);
      }
    });
  },
  deleteProduct: (req, res) => {
    Admin.find({}, "title imagexs price category", (err, products) => {
      if (err) {
        res.status(500).json({
          message: "not good",
        });
      } else {
        res.json(products);
      }
    });
  },
};

module.exports = admin;
