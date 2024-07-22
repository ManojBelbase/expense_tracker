import React from "react";

const Contextmenu = ({ menuposition, setMenuPosition, setExpenses, rowId }) => {
  if (!menuposition.left) return;
  return (
    <div>
      <div className="context-menu" style={menuposition}>
        <div
          onClick={() => {
            console.log("Editint");
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
