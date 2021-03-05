const router = require("express").Router();
const Controller = require('../Controllers/userController');

router.post('/login',Controller.loginPost)
router.post('/loginGoogle',Controller.loginGoogle)
router.post('/register',Controller.registerPost)
router.get('/news',Controller.GetCovidNews)
router.get('/data',Controller.GetDataCovid)
router.get('/travel',Controller.GetDataTravelCovid)

module.exports = router;
