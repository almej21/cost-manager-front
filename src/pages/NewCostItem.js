import React from "react";
const axios = require("axios").default;

export default function NewCostItem() {
  const inputList = document.getElementsByClassName("userInput");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCost = {
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      sum: document.getElementById("sum").value,
      user_id: document.getElementById("user_id").value,
    };
    console.log(newCost);
    axios
      .post("http://localhost:4000/cost-manager/newcost", newCost)
      .then(() => {
        alert("new cost item has been submitted!");
      })
      .then(() => {
        var inputListArr = Array.from(inputList);
        inputListArr.forEach((input) => {
          input.value = "";
        });
      });
  };

  return (
    <div className="form-container">
      <h1>Add new item</h1>
      <form onSubmit={handleSubmit}>
        <label>description:</label>
        <input type="text" className="userInput" id="description"></input>
        <br></br>
        <label>category:</label>
        <input type="text" className="userInput" id="category"></input>
        <br></br>
        <label>sum:</label>
        <input type="number" className="userInput" id="sum"></input>
        <br></br>
        <label>user ID:</label>
        <input type="number" className="userInput" id="user_id"></input>
        <br></br>
        <div className="submit-container">
          <input type="submit" name="submit" className="submit"></input>
        </div>
      </form>
    </div>
  );
}
