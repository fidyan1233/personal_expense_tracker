import React, { useState } from 'react'

const ExpenseForm = ({ onAddExpense }) => {

    const [formData, setFormData] = useState({
        amount: "",
        description: "",
        category: "",
        date: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.amount ||
            !formData.description ||
            !formData.category ||
            !formData.date
        ) {
            alert("Please fill all fields");
            return;
        }

        await onAddExpense(formData);

        setFormData({
            amount: "",
            description: "",
            category: "",
            date: "",
        });
        
    };
    return (
        <div className="expense-form">
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Bills">Bills</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <button type="submit">
                    Add Expense
                </button>
            </form>
        </div>
    )
}

export default ExpenseForm