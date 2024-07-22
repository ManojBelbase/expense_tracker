import React from "react";

const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  defaultOptions,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOptions && (
          <option value="" hidden>
            {defaultOptions}
          </option>
        )}

        {options.map((option, id) => {
          return (
            <option value={option} key={id}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export default Select;
