const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Passport-Local Mongoose will add a username, hash and salt field to store the
// username, the hashed password and the salt value. Additionally Passport-Local
// Mongoose adds some methods to your Schema.
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  name: {
    firstname: String,
    lastname: String,
    guidename: String,
  },
  role: String,
  unit_id: UnitSchema,
  membership_no: String,
  email: String,
  password: String,
  phone: String,
  avatar: Image
});

// connect passportLocalMongoose and use 'email' instead of 'username'
User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
