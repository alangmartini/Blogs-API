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

const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await postService.getByIdService(id);

        if (post.statusCode) {
            const error = post;
            res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(statusCode.SUCESS).json(post);
    } catch (error) {
        return res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
    }
};

const updatePostById = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedPost = await postService.updateService(id, title, content);

        if (updatedPost.statusCode) {
            const error = updatedPost;
            res.status(error.statusCode).json({ message: error.message });
        }

        return res.status(statusCode.SUCESS).json(updatedPost);
    } catch (error) {
        return res.status(statusCode.INTERNAL_ERROR).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    updatePostById,
};
