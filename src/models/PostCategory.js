module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {});
  
  PostCategory.associate = function (models) {
  // create association belongsToMany on category and BlogPost
    PostCategory
        .belongsToMany(
            models.BlogPost, 
            { 
                through: 'PostCategories', 
                as: 'blogPosts',
                foreignKey: 'categoryId',
            },
        );
};

  return PostCategory;
};
