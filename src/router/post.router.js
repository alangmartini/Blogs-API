const express = require('express');
const { postController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { validatePost } = require('../middleware/post.middleware');

const router = express.Router();

router.post(
    '/', 
    tokenAuth,
    validatePost,
    postController.createPost,
);

router.get(
    '/',
    tokenAuth,
    postController.getAllPosts,
);

router.get(
    '/:id', 
    tokenAuth,
    postController.getPostById,
);

module.exports = router;