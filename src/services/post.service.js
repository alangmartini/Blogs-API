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
        const posts = await models.BlogPost.findAll();

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

module.exports = { 
    createService,
    getAllPosts,
    getPostById,
};
