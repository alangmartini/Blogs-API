const express = require('express');
const { userController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { nameEmailPassImageMiddleware } = require('../middleware/nameEmailPassImage.middleware');

const router = express.Router();

router.post(
  '/', 
  nameEmailPassImageMiddleware,
  userController.register,
);

router.get(
  '/', 
  tokenAuth,
  userController.getUsers,
);

router.get(
  '/:id',
  tokenAuth,
  userController.getById,
);
router.delete(
  '/me',
  tokenAuth,
  userController.deleteMe,
);

module.exports = router;