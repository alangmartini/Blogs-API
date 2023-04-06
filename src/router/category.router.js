const express = require('express');
const { categoryController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { categoryNameMiddleware } = require('../middleware/categoryName.middleware');

const router = express.Router();

router.post(
    '/',
    tokenAuth,
    categoryNameMiddleware,
    categoryController.registerCategory,
);

router.get('/', tokenAuth, categoryController.getAllCategories);

module.exports = router;