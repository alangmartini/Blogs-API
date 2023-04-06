const express = require('express');
const { postController } = require('../controllers');
const { tokenAuth } = require('../auth/tokenAuth.middleware');
const { validatePost, validateUpdatePost } = require('../middleware/post.middleware');

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

router.put(
    '/:id',
    tokenAuth,
    validateUpdatePost,
    postController.updatePostById,
);

router.get(
    '/search',
    tokenAuth,
    postController.searchPost,
);

router.delete(
    '/:id',
    tokenAuth,
    postController.deletePost,
);

module.exports = router;