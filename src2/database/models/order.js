'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.hasOne(models.user);
    }
  };
  order.init({
    number: DataTypes.INTEGER,
    date: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    payments_id: DataTypes.INTEGER,
    users_id: DataTypes.INTEGER,
    users_addresses_id: DataTypes.INTEGER,
    states_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};