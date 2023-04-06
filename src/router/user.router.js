const express = require('express');
const { userController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');

const router = express.Router();

router.post('/', userController.register);

router.get(
  '/', 
  tokenAuth,
  userController.getUsers,
);

module.exports = router;