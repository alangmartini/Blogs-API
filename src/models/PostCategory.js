/* eslint-disable max-lines-per-function */
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {});
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      through: 'PostCategory', 
      });

    models.Category.belongsToMany(models.BlogPost, {
      through: 'PostCategory', 
    });
};

  return PostCategory;
};
