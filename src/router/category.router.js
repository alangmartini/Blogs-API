const express = require('express');
const categoryController = require('../controllers');

const router = express.Router();

router.post('/', categoryController.registerCategory);

module.exports = router;