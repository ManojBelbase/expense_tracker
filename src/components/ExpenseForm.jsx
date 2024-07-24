import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({
  setExpenses,
  expense,
  setExpense,
  editingRowId,
  seteditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      {
        required: true,
        message: "Please Enter Title",
      },
      {
        minLength: 5,
        message: "Title should be minimum 5 characters long",
      },
    ],
    category: [{ required: true, message: "Please Select Category" }],
    amount: [
      { required: true, message: "Please Enter Amount" },
      { pattern: /^-?\d*\.?\d*$/, message: "Please Enter number only" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (validationConfig[key]) {
        validationConfig[key].some((rule) => {
          if (rule.required && !value) {
            errorsData[key] = rule.message;
            return true;
          }
          if (rule.minLength && value.length < rule.minLength) {
            errorsData[key] = rule.message;
            return true;
          }
          if (rule.pattern && !rule.pattern.test(value)) {
            errorsData[key] = rule.message;
          }
          return false;
        });
      }
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(expense);
    //If the length is greater than zero (i.e., there are validation errors), the function exits early and does not proceed further. 
    if (Object.keys(validationResult).length) return;

    // update logic
    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((prevElem) => {
          if (prevElem.id === editingRowId) {
            return { ...expense, id: editingRowId };
          } else {
            return prevElem;
          }
        })
      );

      setExpense({
        title: "",
        category: "",
        amount: "",
      });
      seteditingRowId("");
      return;
    }

    // Add logic
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOptions="Select Category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />

      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
