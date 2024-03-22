import React from "react";
export default function ListData({ array, setArray }) {
  function Delete(index) {
    let list = array;
    delete list[index];
    setArray(list.filter((x) => x));
  }
  return (
    <div>
      {array &&
        array.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => {
                Delete(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
