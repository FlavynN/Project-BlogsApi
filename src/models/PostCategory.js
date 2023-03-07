/** 
 @param { import('sequelize').Sequelize } sequelize
 @param {*} DataTypes
 @returns
 * 
*/

module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define(
    'PostCategory',
    {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
    },
    {
      underscored: true,
      tableName: 'posts_categories',
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory,
      as: 'categories',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    }
    )
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory,
      as: 'post',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    }
    )
  }
  return PostCategory;
}