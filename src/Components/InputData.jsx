import React, { useState } from "react";
export default function InputData({ data, setData }) {
  return (
    <div className="form">
      <input
        type="text"
        onChange={(event) => {
          setData(event.target.value);
        }}
      />
    </div>
  );
}
