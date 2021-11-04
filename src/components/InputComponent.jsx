import React from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import  useTextInput  from "../hooks/useTextInput";
function InputComponent(props) {
  let img;
  const {
    value,onChange,click
  } = useTextInput(0)
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

  const handleChange = (e) => {
    props.action(e.target.value)
    
  }
  return (
    <>
    {props.alert&&<span className="alert">Can`t be zero</span>}
    <div className={`input ${props.alert&&`isAlert`}`}>
     {
        img && <img src={img} alt=""/>
     }
     
      <input type="number" onClick={click} placeholder={props.label||0}  value={props.value} onChange={handleChange}/>
    </div>
    </>
  );
}

export default InputComponent;
