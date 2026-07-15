const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "Please enter the expense amount"],
      min: [0, "Amount cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Please select a category"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please enter a description"],
      trim: true,
    },
    date: {
      type: Date,
      required: [true, "Please select a date"],
    },
  },
  {
    timestamps: true,
  }
);

// Create Expense Model
const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;