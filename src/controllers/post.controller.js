const { statusCode } = require('../errors/errors.error');
const postService = require('../services');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    try {
        const post = await postService.createService(title, content, categoryIds);

        if (post.statusCode) {
            const error = post;
            res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(statusCode.SUCCESFULLY_CREATED).json(post);
    } catch (error) {
        return res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
    }
};

const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllService();

        if (posts.statusCode) {
            const error = posts;
            res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(statusCode.SUCESS).json(posts);
    } catch (error) {
        return res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getAllPosts,
};
