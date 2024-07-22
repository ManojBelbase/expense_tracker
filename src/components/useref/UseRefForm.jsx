import React, { useRef } from "react";

const UseRefForm = () => {
  const titleREf = useRef(null);
  const nameRef = useRef(null);
  const handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault();
    const title = titleREf.current.value;
    const fname = nameRef.current.value;
    console.log("title :", title);
    console.log("name :", fname);
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
    </div>
  );
};

export default UseRefForm;
