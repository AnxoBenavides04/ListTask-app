import React from "react";

export default function ButtonData({ data, setData, array, setArray }) {
  function addTask(event) {
    if (!(data == "")) {
      setArray([...array, data]);
    }
    event.preventDefault();
  }
  return (
    <div className="form">
      <button onClick={(event) => addTask(event)}>Add</button>
    </div>
  );
}
