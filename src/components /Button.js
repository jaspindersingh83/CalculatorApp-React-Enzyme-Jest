//@flow

import React from "react";
import "./calculator.css";

type Bprops ={
  item: string,
  handleInput:function
}

export default function Button(props: Bprops) {
  return (
    <div
      className="Button"
      onClick={() => {
        props.handleInput(props.item);
      }}
    >
      {props.item}
    </div>
  );
}
