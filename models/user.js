'use strict';
const {
  Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    id: { 
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {type:DataTypes.STRING(50), allowNull: false},
    address: {type:DataTypes.STRING(255), allowNull: false},
    phone: {type:DataTypes.STRING(13), allowNull: false},
    gender: {type:DataTypes.STRING(10), allowNull: false},
    email: {type:DataTypes.STRING(255), allowNull: false},
    password: { type: DataTypes.TEXT, allowNull: false }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });
  return User;
};