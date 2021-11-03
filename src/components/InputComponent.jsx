import React from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
function InputComponent(props) {
  let img;

  switch (props.type) {
    case "dollar":
        img= dollar;

      break;

    case "person":
      img = person;
      break;

    default:
      img=null
      break;
  }

  return (
    <div className="input">
     {
        img && <img src={img} alt=""/>
     }
      <input type="number" placeholder={props.label||0} />
    </div>
  );
}

export default InputComponent;
