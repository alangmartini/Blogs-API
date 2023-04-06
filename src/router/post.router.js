const express = require('express');
const { postController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { validatePost } = require('../middleware/post.middleware');

const router = express.Router();

// router.get('/', postController.getAllPosts);

// router.get('/:id', postController.getPostById);

router.post(
'/', 
    tokenAuth,
    validatePost,
    postController.createPost,
);

module.exports = router;