const express = require('express');
const router = express.Router();
const user = require("../controllers/user");

/* GET home page. */
router.post('/create', user.contact);
/*
router.post('/login', user.title);

router.put('/profile', user.title);

router.get('/orders', user.title);

router.post('/cart', user.title);*/

  
module.exports = router;
