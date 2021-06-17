'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.address);
      user.belongsToMany(models.role, { through: 'users_has_role', as: 'role' });
      user.belongsTo(models.order);

    }
  };
  user.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    addresses_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};