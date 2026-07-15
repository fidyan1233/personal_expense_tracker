import React from 'react'
import ExpenseItem from './ExpenseItem'

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className="expense-list">
      <h2>Expense List</h2>

       {expenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  )
}

export default ExpenseList