import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1>The Cost Manager project</h1>
      <div className="home-container">
        <div className="almogCard">
          <img src="../../almej.png" alt="almog"></img>
          <div className="almogCardDetails">
            <h4>ID: 209082858</h4>
            <h4>Almog Aharon</h4>
            <h4>050-5556853</h4>
          </div>
        </div>
        <div className="almogCard">
          <img src="../../naor.png" alt="naor"></img>
          <div className="almogCardDetails">
            <h4>ID: 207633165</h4>
            <h4>Naor Ori Gabay</h4>
            <h4>052-6100356</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
