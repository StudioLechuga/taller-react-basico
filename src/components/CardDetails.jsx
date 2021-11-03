import React from "react";

function CardDetails() {
  return (
    <div className="container-card">
      <div className="card-details">
        <div className="card-details-header">
          <span className="title">Tip Amount</span>
          <span className="sub">/ Person</span>
        </div>
        <span className="value">212</span>
      </div>
      <div className="card-details">
        <div className="card-details-header">
          <span className="title">Total</span>
          <span className="sub">/ Person</span>
        </div>
        <span className="value">121</span>
      </div>
      <div className="card-details">
        <div className={`button isActive`}>Reset</div>
      </div>
    </div>
  );
}

export default CardDetails;
