const bcrypt = require("bcryptjs");
const { JSONB } = require("sequelize");
// Creating our Languages model
module.exports = function(sequelize, DataTypes) {
  const Languages = sequelize.define(
    "languages",
    {
      langName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      freezeTableName: true,
    }
  );

  return Languages;
};
