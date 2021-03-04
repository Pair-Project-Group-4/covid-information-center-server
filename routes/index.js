const router = require("express").Router();
const Controller = require('../Controllers/userController');

router.post('/login',Controller.loginPost)
router.post('/register',Controller.registerPost)

module.exports = router;
