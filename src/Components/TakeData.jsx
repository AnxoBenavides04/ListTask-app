import React from "react";
import ListData from "./ListData";
import ButtonData from "./ButtonData";
import InputData from "./InputData";
import { useState } from "react";
export default function TakeData() {
  const [array, setArray] = useState([]);
  const [data, setData] = useState("");

  return (
    <div>
      <ListData array={array} setArray={setArray} />
      <form className="form">
        <InputData data={data} setData={setData} />
        <ButtonData
          data={data}
          setData={setData}
          array={array}
          setArray={setArray}
        />
      </form>
    </div>
  );
}
