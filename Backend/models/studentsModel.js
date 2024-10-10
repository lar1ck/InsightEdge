const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  class: {
    type: "String",
    required: true,
  },
  school: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
  },
  age: {
    type: "Number",
    required: true,
  },
  fullTime: {
    type: "Boolean",
    required: true,
    default: true,
  }

});

const Students = mongoose.model("Students", studentsSchema);

module.exports = Students;
