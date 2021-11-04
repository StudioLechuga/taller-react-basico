import React ,{useContext}from "react";
import {AppContext} from "../context/App"
function CardDetails(props) {
  const {setReset} = useContext(AppContext);
  const {bill,numberOfPeople,tips}=props; 
  const tip= tips.filter(tip=>tip.isActive)[0]||{
    value:0
  }
  console.log(tip);
 
  const totalTip=(bill/100)*tip.value/numberOfPeople;
  const totalBill=(bill/numberOfPeople) +totalTip;
  return (
    <div className="container-card">
      <div className="card-details">
        <div className="card-details-header">
          <span className="title">Tip Amount</span>
          <span className="sub">/ Person</span>
        </div>
        <span className="value">${Math.round(totalTip * 100) / 100 ||0}</span>
      </div>
      <div className="card-details">
        <div className="card-details-header">
          <span className="title">Total</span>
          <span className="sub">/ Person</span>
        </div>
        <span className="value">${Math.round(totalBill * 100) / 100 ||0}</span>
      </div>
      <div className="card-details">
        <div className={`button isActive`} onClick={setReset}>Reset</div>
      </div>
    </div>
  );
}

export default CardDetails;
