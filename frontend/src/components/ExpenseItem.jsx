import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const ExpenseItem = ({ expense, onDelete }) => {
  return (
   <div className="expense-card">

     <button
        className="delete-btn"
        onClick={() => onDelete(expense._id)}
      >
        <FaTrashAlt />
      </button>
      <h3>{expense.description}</h3>

      <p>
        <strong>Amount:</strong> ₹{expense.amount}
      </p>

      <p>
        <strong>Category:</strong> {expense.category}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(expense.date).toLocaleDateString("en-IN")}
      </p>
    </div>
  )
}

export default ExpenseItem