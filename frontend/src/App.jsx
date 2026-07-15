import { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import TotalExpense from './components/TotalExpense'
import { addExpense, deleteExpense, getExpenses } from './services/expenseService';
import Swal from "sweetalert2";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchExpenses = async () => {
    try {
      setLoading(true);

      const response = await getExpenses();

      setExpenses(response.data);
    } catch (error) {
      console.log("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleAddExpense = async (expenseData) => {
    try {
      await addExpense(expenseData);

      fetchExpenses();
      Swal.fire({
        title: "Added!",
        text: "Expense added successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    } catch (error) {
      console.log("Error adding expense:", error);
    }
  };

  const handleDeleteExpense = async (id) => {
    const result = await Swal.fire({
      title: "Delete Expense?",
      text: "This expense will be permanently deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteExpense(id);

      await fetchExpenses();

      Swal.fire({
        title: "Deleted!",
        text: "Expense deleted successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });


    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong.",
        icon: "error",
      });

      console.log(error);
    }
  };

  const totalExpense = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  return (
    <>
      <div className="container">
        <h1>Personal Expense Tracker</h1>

        <ExpenseForm onAddExpense={handleAddExpense} />

        <TotalExpense total={totalExpense} />

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <ExpenseList
            expenses={expenses}
            onDelete={handleDeleteExpense}
          />
        )}
      </div>
    </>
  )
}

export default App
