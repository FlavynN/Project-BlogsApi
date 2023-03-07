/** 
 @param { import('sequelize').Sequelize } sequelize
 @param {*} DataTypes
 @returns
 * 
*/

module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',

    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },

    {
      tableName: 'blog_posts',
      underscored: true,
      timestamps: false,
    });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' }, as: 'user'
    });

  }

  return BlogPost;
}