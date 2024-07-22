import React, { useRef, useState } from "react";

const UseRefForm = () => {
  const [formData, setFormData] = useState([]);
  const titleREf = useRef(null);
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let title = titleREf.current.value;
    let fname = nameRef.current.value;
    console.log("title :", title);
    console.log("name :", fname);
    setFormData([...formData, { title, fname }]);

    title = "";
    fname = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" id="title" ref={titleREf} />

        <label>Name</label>
        <input type="text" id="fname" ref={nameRef} />

        <button type="submit">Submit</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.fname}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UseRefForm;
