const express = require('express');
const { loginController } = require('../controllers');
const { emailAndPassMiddleware } = require('../middleware/emailAndPass.middleware');

const router = express.Router();

router.post(
'/',
  emailAndPassMiddleware,
  loginController.logIn,
);

module.exports = router;
