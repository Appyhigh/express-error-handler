const router = require('express').Router();
const controller = require('../controller/testing');
const asyncExecute = require('../middleware/asyncExecute');


router.get('/', asyncExecute(controller.testing));


module.exports = router;