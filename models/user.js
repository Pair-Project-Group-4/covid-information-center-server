'use strict';
const {
  Model
} = require('sequelize');
let Bcrypt = require('../helpers/bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "name must not be empty"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : "email must not empty"
        },
        isEmail : {
          msg : "format must be @email.com"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "password must not empty"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance, options)=>{
    instance.password = Bcrypt.hash(instance.password)
  })
  return User;
};