import React from 'react'

const TotalExpense = ({ total }) => {
  return (
   <div className="total-expense">
      <h2>Total Spent</h2>

      <h3>₹{total.toFixed(2)}</h3>
    </div>
  )
}

export default TotalExpense