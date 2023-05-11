const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let employee = new Schema(
  {
    id: {
      value: uuidv4(),
      type: String,
    },
    name: {
      type: String,
      required: [true, "Pleasw Enter Name"],
    },
    department: {
      type: String,
      required: [true, "Pleasw Enter Department"],
    },
    salary: {
      type: Number,
      required: [true, "Pleasw Enter Salary"],
    },
  },
  {
    timestamps: true,
    collection: "employee",
  }
);
module.exports = mongoose.model("Employee", employee);
