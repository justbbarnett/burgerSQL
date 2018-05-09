// Import the ORM to create functions that will interact with the database.
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    order: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    
  });
  return Burger;
};
