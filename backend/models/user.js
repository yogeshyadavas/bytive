const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DataSchema = new Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  },
});

const User = mongoose.model("user", DataSchema);
module.exports = User;
