const models = require('../models');
const { statusCode, errorMessages } = require('../errors/errors.error');

const createService = async (title, content, categoryIds) => {
    try {
        const categories = await models.Category.findAll({ where: { id: categoryIds } });
        
        if (categories.length !== categoryIds.length) {
            const error = new Error(errorMessages.CATEGORY_ID_NOT_FOUND);
            error.statusCode = statusCode.NOT_FOUND;

            return error;
        }
        
        const post = await models.BlogPost.create({ title, content });

        return post;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

const getAllPosts = async () => {
    try {
        const posts = await models.BlogPost.findAll({
            include: [
                { model: models.User, exclude: ['password'] },
                { model: models.Category, through: { attributes: [] } },
            ],
        });

        return posts;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

const getPostById = async (id) => {
    try {
        const post = await models.BlogPost.findByPk(
            id,
            { include: [
                    { models: models.User, exclude: ['password'] },
                    { models: models.Category, through: { attributes: [] } },
                ],
            },
        );

        if (!post) {
            const error = new Error(errorMessages.POST_NOT_FOUND);
            error.statusCode = statusCode.NOT_FOUND;

            return error;
        }

        return post;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

const searchPost = async (parameter) => {
    try {
        const posts = await models.BlogPost.findAll({
            where: {
                [models.Sequelize.Op.or]: [
                    { title: { [models.Sequelize.Op.iLike]: `%${parameter}%` } },
                    { content: { [models.Sequelize.Op.iLike]: `%${parameter}%` } },
                ],
            },
            include: [
                { model: models.User, exclude: ['password'] },
                { model: models.Category, through: { attributes: [] } },
            ],
        });

        return posts;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

const handleError = (post, user) => {
    if (!post) {
        const error = new Error();
        error.message = errorMessages.POST_NOT_FOUND;
        error.statusCode = statusCode.NOT_FOUND;

        return error;
    }

    if (post.userId !== user.id) {
        const error = new Error(errorMessages.UNAUTHORIZED);
        error.statusCode = statusCode.UNAUTHORIZED;

        return error;
    }

    return null;
};

const updatePostById = async (id, title, content, user) => {
    try {
        const post = await models.BlogPost.findByPk(id, { include: [
                    { model: models.User, exclude: ['password'] },
                    { model: models.Category, through: { attributes: [] } },
                ],
            });

        const error = handleError(post, user);

        if (error) {
            return error;
        }

        await post.update({ title, content });

        return post;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

const deletePostById = async (id, user) => {
    try {
        const post = await models.BlogPost.findByPk(id);

        const error = handleError(post, user);

        if (error) {
            return error;
        }

        await post.destroy();

        return true;
    } catch (error) {
        return { statusCode: statusCode.INTERNAL_ERROR, message: error.message };
    }
};

module.exports = { 
    createService,
    getAllPosts,
    getPostById,
    updatePostById,
    deletePostById,
    searchPost,
};