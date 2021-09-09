const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const maleNameSchema = new Schema({
  male: {
    type: String,
    required: true,
    unique: true
  }
});

const femaleNameSchema = new Schema({
  female: {
    type: String,
    required: true,
    unique: true
  }
});

const neutralNameSchema = new Schema({
  neutral: {
    type: String,
    required: true,
    unique: true
  }
});

const androgenNameSchema = new Schema({
  androgen: {
    type: String,
    required: true,
    unique: true
  }
});

const lastNameSchema = new Schema({
  last: {
    type: String,
    required: true,
    unique: true
  }
});

const NameSchema = new Schema({
  // male: [maleNameSchema],
  // female: [femaleNameSchema],
  // neutral: [neutralNameSchema],
  // androgen: [androgenNameSchema],
  // last: [lastNameSchema]
  male: {
    type: String,
    required: true,
    unique: true
  }
});

const Profile = mongoose.model('Profile', NameSchema);

module.exports = Profile;