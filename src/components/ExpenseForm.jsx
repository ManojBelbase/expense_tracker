import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
    email: "",
  });
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
    amount: [{ required: true, message: "Please Enter Amount" }],
    email: [
      { required: true, message: "Please Enter Email" },
      {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please Enter a Valid Email",
      },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        console.log(rule);
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          console.log((errorsData[key] = rule.message));
          return true;
        }
        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
        return false;
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = validate(expense);

    if (Object.keys(validationResult).length) return;
    setExpenses((prev) => [...prev, { ...expense, id: crypto.randomUUID() }]);
    setExpense({
      title: "",
      category: "",
      amount: "",
      email: "",
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
      <Input
        label="Email"
        id="email"
        name="email"
        value={expense.email}
        onChange={handleChange}
        error={errors.email}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
