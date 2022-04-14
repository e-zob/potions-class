import React from "react";
import { useState, useEffect } from "react";

function AttendanceForm(props) {
  const options = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw", "Sort Me!"];
  const [name, setName] = useState("");
  const [house, setHouse] = useState("Gryffindor");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleHouse(e) {
    setHouse(e.target.value);
  }

  function getNewStudentHouse() {
    const randomIndex = randomHouseInd();
    return house === "Sort Me!" ? options[randomIndex] : house;
  }

  function handleRegister(e) {
    e.preventDefault();
    if (name) {
      const newStudent = {
        name: name,
        house: getNewStudentHouse(),
        time: new Date().toUTCString(),
        isLate: false,
      };
      props.updateStudents(newStudent);
      setName("");
    }
  }

  function createHouseOptions() {
    return options.map((house, i) => (
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
      <input className="form-field" type="text" value={name} onChange={handleName}></input>
      <label>House</label>
      <select className="form-field" onChange={handleHouse}>
        {createHouseOptions()}
      </select>
      <button className="submit-btn" onClick={(e) => handleRegister(e)}>
        Register Me!
      </button>
    </div>
  );
}

export default AttendanceForm;
