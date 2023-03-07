/** 
 @param { import('sequelize').Sequelize } sequelize
 @param {*} DataTypes
 @returns
 * 
*/

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      timeStamps: false,
      tableName: 'category',
      underscored: true,
    }


  );
  return Category;
}