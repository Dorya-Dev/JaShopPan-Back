/*
 * Model de product
 *
 */

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    category: String,
    title: String,
    imagexs: String,
    image: String,
    price : Number,
    characteristics: String
    
},
{
  collection:"products"  
}
);

module.exports = mongoose.model('Product', productSchema);