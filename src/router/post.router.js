const express = require('express');
const { postController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { validatePost, validateUpdatePost } = require('../middleware/post.middleware');

const router = express.Router();

router.get(
    '/search',
    tokenAuth,
    postController.searchPost,
);

router.get(
    '/:id', 
    tokenAuth,
    postController.getPostById,
);

router.get(
    '/',
    tokenAuth,
    postController.getAllPosts,
);

router.post(
    '/', 
    tokenAuth,
    validatePost,
    postController.createPost,
);

router.put(
    '/:id',
    tokenAuth,
    validateUpdatePost,
    postController.updatePostById,
);

router.delete(
    '/:id',
    tokenAuth,
    postController.deletePost,
);

module.exports = router;