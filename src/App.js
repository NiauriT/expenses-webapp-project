import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./index.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  // ✅ Declare this BEFORE using it in JSX
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "0 auto",
        border: "2px solid #ccc",
        borderRadius: "12px",
      }}
    >
      <h1>💸 Budget Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      {/* ✅ This needs deleteExpense to be defined first */}
      <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <h2 className="total">Total Spent: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}
export default App;
