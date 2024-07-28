import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./components/ExpenseData";
import { useLocalStorage } from "./components/hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    amount: "",
    email: "",
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", ExpenseData);
  const [editingRowId, seteditingRowId] = useLocalStorage("editingRowId", "");
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            expense={expense}
            setExpense={setExpense}
            editingRowId={editingRowId}
            seteditingRowId={seteditingRowId}
          />
          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            setExpense={setExpense}
            seteditingRowId={seteditingRowId}
          />
        </div>
        {/* <UseRefForm /> */}
      </main>
    </>
  );
}

export default App;
