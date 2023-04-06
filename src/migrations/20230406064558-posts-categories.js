/* eslint-disable max-lines-per-function */

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('posts_categories', {
    postId: {
      type: Sequelize.INTEGER,
      field: 'post_id',
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
    categoryId: {
      type: Sequelize.INTEGER,
      field: 'category_id',
      references: {
        model: 'categories',
        key: 'id',
      },
    },
  }),

  down: async (queryInterface, _Sequelize) => {
    queryInterface.dropTable('posts_categories');
  },
};
