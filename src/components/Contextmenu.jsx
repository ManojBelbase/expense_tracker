import React from "react";

const Contextmenu = ({
  menuposition,
  setMenuPosition,
  setExpenses,
  rowId,
  expenses,
  setExpense,
  seteditingRowId,
}) => {
  if (!menuposition.left) return;
  return (
    <div>
      <div className="context-menu" style={menuposition}>
        <div
          onClick={() => {
            const { title, category, amount } = expenses.find(
              (exp) => exp.id === rowId
            );
            seteditingRowId(rowId);
            setExpense({ title, category, amount });
            setMenuPosition({});
          }}
        >
          Edit
        </div>
        <div
          onClick={() => {
            console.log("deleting");
            setExpenses((prevStats) =>
              prevStats.filter((expense) => expense.id != rowId)
            );
            setMenuPosition({});
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default Contextmenu;
