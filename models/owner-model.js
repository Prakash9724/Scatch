const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/Scatch");

const ownerSchema = mongoose.Schema({
  fullname: {
    type: String,
    minLength: 4,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  gstin: String,
  Picture: String,
});

module.exports = mongoose.model("owner", ownerSchema);
