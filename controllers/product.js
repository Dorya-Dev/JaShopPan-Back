const Product = require("../models/Product");

const product ={

    content: (req, res) => {
        
        Product.findOne({title: req.query.title}, (err, product) => {
            if (err){ 
                res.status(500).json({
                    message: "not good"
                })
                }else{
                    res.json(product)
                }
        })
    },

    detail: (req, res) => {
        res.send("ok")
    },

    sidebar: (req, res) => {
        res.send("ok")
    },
    search: (req, res) => {
        res.send("ok")
    }
}

module.exports = product;