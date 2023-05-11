const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let employee = new Schema(
  {
    id: {
      value: uuidv4(),
      type: String,
    },
    employeeName: {
      type: String,
    },
    departments: {
      type: String,
    },
    salary: {
      type: Number,
    },
  },
  {
    timestamps: true,
    collection: "employee",
  }
);
module.exports = mongoose.model("Employee", employee);
