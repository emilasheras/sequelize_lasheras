'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      role.belongsToMany(models.user, { through: 'users_has_role', as: 'user' });
    }
  };
  role.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};