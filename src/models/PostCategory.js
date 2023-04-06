/* eslint-disable max-lines-per-function */
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'post_id',
      references: {
        model: 'BlogPost',
        key: 'id',
      },
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'category_id',
      references: {
        model: 'Category',
        key: 'id',
      },
    },
  }, {
    tableName: 'posts_categories',
    timestamps: false,
    underscored: true,
  });
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
        as: 'categories',
        through: 'PostCategory', 
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: 'PostCategory', 
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
};

  return PostCategory;
};
