import React from "react";
import Button from "./Button";
import "./calculator.css";
const list = [7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, " ", "*", 0, "/", "="];

export default function Buttons(props) {
  return (
    <div className="Holder">
      {list.map((item, index) => {
        return (
          <Button key={index} item={item} handleInput={props.handleInput} />
        );
      })}
    </div>
  );
}
