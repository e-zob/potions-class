import React from "react";
import { useState, useEffect } from "react";

function AttendanceForm(props) {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Sort Me!"];
  const [nameInput, setNameInput] = useState("");
  const [houseInput, setHouseInput] = useState("Gryffindor");

  function handleNameInput(e) {
    setNameInput(e.target.value);
  }

  function handleHouseInput(e) {
    setHouseInput(e.target.value);
  }

  function getNewStudentHouse() {
    const randomIndex = randomHouseInd();
    return houseInput === "Sort Me!" ? houses[randomIndex] : houseInput;
  }

  function handleRegister(e) {
    e.preventDefault();
    if (nameInput) {
      const newStudent = {
        name: nameInput,
        house: getNewStudentHouse(),
        time: new Date().toUTCString(),
        isLate: false,
      };
      props.updateStudents(newStudent);
      setNameInput("");
    }
  }

  function createHouseOptions() {
    return houses.map((house, i) => (
      <option key={i} value={house}>
        {house}
      </option>
    ));
  }

  function randomHouseInd() {
    return Math.floor(Math.random() * 4);
  }

  return (
    <div className="form-item">
      <label>Name</label>
      <input className="form-field" type="text" value={nameInput} onChange={handleNameInput}></input>
      <label>House</label>
      <select className="form-field" onChange={handleHouseInput}>
        {createHouseOptions()}
      </select>
      <button className="submit-btn" onClick={(e) => handleRegister(e)}>
        Register Me!
      </button>
    </div>
  );
}

export default AttendanceForm;
