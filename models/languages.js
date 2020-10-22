const bcrypt = require("bcryptjs");
const { JSONB } = require("sequelize");
// Creating our Languages model
module.exports = function (sequelize, DataTypes) {
    const Languages = sequelize.define('languages', {
        langName: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          }
         
    },

        {
            freezeTableName: true

        });

        Languages.associate = function(models) {
            // We're saying that a language should belong to an userprofile
           
            Languages.belongsTo(models.UserProfile, {
                foreignKey: {
                  allowNull: false
                }
              });
          };   

    return Languages;
};
