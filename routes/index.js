var express = require('express');
const CabideController = require('../controllers/CabideController');
var router = express.Router();

/* GET home page. */
router.get('/', CabideController.index);
router.get('/login', CabideController.login);


module.exports = router;
