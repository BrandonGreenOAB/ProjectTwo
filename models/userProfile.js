const bcrypt = require("bcryptjs");
// Creating our Languages model
module.exports = function(sequelize, DataTypes) {
  const UserProfile = sequelize.define(
    "userprofile",
    {
      languages: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      username: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      createdjobs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      completedjobs: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }
    },

    {
      freezeTableName: true
    }
  );

  UserProfile.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserProfile;
};
