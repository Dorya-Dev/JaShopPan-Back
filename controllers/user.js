const Contact = require("../models/User");

const user ={

    contact: (req, res) => {
        const newContact = new Contact ({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            age: req.body.age
        })
        newContact.save(error => {
            if (error){ 
            res.status(500).json({
                message: "not good"
            })
            }else{
                res.render("index", { 
                    title: "hello"
                });
            }
        })
    }
}

module.exports = user;