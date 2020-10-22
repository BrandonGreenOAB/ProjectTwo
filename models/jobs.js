const bcrypt = require("bcryptjs");
const { JSONB } = require("sequelize");
// Creating our Jobs model
module.exports = function (sequelize, DataTypes) {
    const Jobs = sequelize.define('jobs', {
        jobName: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
          price: {
            type: DataTypes.DECIMAL ,
            allowNull: false
          },
          languge: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
          jobDone: {
            type: DataTypes.BOOLEAN,
            allowNull: false
          },
    },

        {
            freezeTableName: true

        });

        Jobs.associate = function(models) {
            // We're saying that a Post should belong to an Author
           
            Jobs.belongsTo(models.UserProfile, {
                foreignKey: {
                  allowNull: false
                }
              });
          };   

    return Jobs;
};
