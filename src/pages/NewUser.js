import React from "react";
const axios = require("axios").default;

export default function NewUser() {
  const inputList = document.getElementsByClassName("cost-item-details");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      birthday: document.getElementById("birthday").value,
      user_id: document.getElementById("user_id").value,
    };
    console.log(newUser);
    axios
      .post("http://localhost:4000/cost-manager/newuser", newUser)
      .then(() => {
        alert("new user has been added!");
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
      <h1>Add new user</h1>
      <form onSubmit={handleSubmit}>
        <label>First name:</label>
        <input type="text" className="userInput" id="first_name"></input>
        <br></br>
        <label>Last name:</label>
        <input type="text" className="userInput" id="last_name"></input>
        <br></br>
        <label>Birthday:</label>
        <input type="text" className="userInput" id="birthday"></input>
        <br></br>
        <label>User ID:</label>
        <input type="number" className="userInput" id="user_id"></input>
        <br></br>
        <div className="submit-container">
          <input type="submit" name="submit" className="submit"></input>
        </div>
      </form>
    </div>
  );
}
