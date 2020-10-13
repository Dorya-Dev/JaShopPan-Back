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

    /*detail: (req, res) => {
        
    },

    sidebar: (req, res) => {
        
    },
    search: (req, res) => {
       
    }*/
}

module.exports = product;