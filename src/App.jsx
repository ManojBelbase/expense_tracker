import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ExpenseData from "./components/ExpenseData";

function App() {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });
  const [expenses, setExpenses] = useState(ExpenseData);
  const [editingRowId, seteditingRowId] = useState("");
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
