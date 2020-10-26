const bcrypt = require("bcryptjs");
const { JSONB } = require("sequelize");
// Creating our Jobs model
module.exports = function(sequelize, DataTypes) {
  const Jobs = sequelize.define(
    "Jobs",
    {
      jobName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      jobDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      },
    },

    {
      freezeTableName: true,
    }
  );



  return Jobs;
};
