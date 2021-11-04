'use strict';

const bcrypt = require('bcrypt');

const UserModel = (sequelize, DataTypes) => {
  const users = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    role: {
      type: DataTypes.ENUM(['admin', 'editor', 'user']),
      defaultValue: 'user',
      allowNull: false,
      unique: true
    }
  });

  users.beforeCreate((user, options) => {
    return bcrypt.hash(user.password, 10).then(hashedPass => {
      user.password = hashedPass;
    });
  });

  users.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) { return user; }
    throw new Error('Invalid User');
  }

  return users;
}

module.exports = UserModel;
