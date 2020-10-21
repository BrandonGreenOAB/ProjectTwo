const bcrypt = require("bcryptjs");
// Creating our userProfile model
module.exports = function (sequelize, DataTypes) {
    const UserProfile = sequelize.define('userprofile', {
        languages: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
          username: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
          jobsOpens: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
          jobsDone: {
            type: DataTypes.Array(DataTypes.STRING),
            allowNull: false
          },
    },

        {
            freezeTableName: true

        });

        UserProfile.associate = function(models) {
            // We're saying that a User Profile should belong to an USER
            // A User profile can't be created without an User due to the foreign key constraint
            UserProfile.belongsTo(models.User, {
              foreignKey: {
                allowNull: false
              }
            });
          };   

    return UserProfile;
};
