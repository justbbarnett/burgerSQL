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
    orderUp: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    // disable timestamps
    timestamps: false
  }
    
  );
  return Burger;
};
