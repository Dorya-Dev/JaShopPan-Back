const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const authentication = require("../middleware/authentication");

/* GET home page. */
router.post("/create", user.create);

router.post("/login", user.login);

router.get("/profile", authentication, user.getProfileData);

/*router.put('/profile', user.title);

router.get('/orders', user.title);

router.post('/cart', user.title);*/

module.exports = router;
