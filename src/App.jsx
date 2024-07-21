import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./components/ExpenseData";

function App() {
  const [expense, setExpense] = useState(ExpenseData);
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpense={setExpense} />
          <ExpenseTable expense={expense} />
        </div>
      </main>
    </>
  );
}

export default App;
