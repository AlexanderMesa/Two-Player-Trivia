module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    // eslint-disable-next-line camelcase
    user_name: DataTypes.STRING,
    wins: DataTypes.INTEGER
  });
  return users;
};
