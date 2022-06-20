import { React, useState } from "react";
const axios = require("axios").default;

export default function Report() {
  const [report, setReport] = useState([]);
  const [monthSum, setMonthSum] = useState();
  const [yearAndMonth, setYearAndMonth] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var yearAndMonth = document.getElementById("yearMonth").value;
    setYearAndMonth(yearAndMonth);

    var userId = document.getElementById("userId").value;
    var year = yearAndMonth.slice(0, 4);
    var month = yearAndMonth.slice(5);
    var totalSum = 0;

    axios
      .get("http://localhost:4000/cost-manager/report", {
        params: {
          user_id: userId,
          year: year,
          month: month,
        },
      })
      .then((res) => {
        //console.log(res.data);
        let report = res.data;
        report.forEach((item) => {
          totalSum += item.sum;
        });
        setReport(report);
        setMonthSum(totalSum);
      });
  };
  return (
    <div className="form-container">
      <h1>Report</h1>
      <form onSubmit={handleSubmit}>
        <label>User ID:</label>
        <input type="number" className="userInput" id="userId"></input>
        <br></br>
        <label for="yearMonth">Month and year:</label>
        <input
          type="month"
          className="userInput"
          id="yearMonth"
          name="yearMonth"
        ></input>
        <div className="submit-container">
          <input
            type="submit"
            name="submit"
            className="submit"
            value="Get report"
          ></input>
        </div>
      </form>
      <h2>
        {monthSum > 0
          ? `The total sum for ${yearAndMonth} is ${monthSum} ILS.`
          : "There's no report for the chosen month."}
      </h2>
      <div className="report-container">
        {report.map((item) => {
          return (
            <div className="reportItem" key={item._id}>
              <h2>{item.description}</h2>
              <p>category: {item.category}</p>
              <p>cost: {item.sum} ILS</p>
              <p>date added: {item.date}</p>
              <p>item ID: {item._id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
