const S = require("sequelize");

const db = require("../db/index");
const bcrypt = require("bcrypt");

class User extends S.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    email: {
      type: S.STRING(40),
      allowNull: false,
      unique: {
          msg: 'El email necesita ser unico'
      },
      validate: {
          isEmail: {
              msg: 'Email no valido'
          },
          notEmpty: {
              msg: 'Ingrese un email'
          }
      }
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user)=>{
    return bcrypt
    .genSalt(16)
    .then ((salt)=>{
        user.salt = salt;
        return user.hash(user.password, salt);
    })
    .then((hash)=>{
        user.password = hash
    })
})
module.exports = User;
