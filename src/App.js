import "./App.css";
import React, { useState } from "react";
import Register from "./components/Register";
import hogwartsStudentRegistry from "./data/data.js";
import AttendanceForm from "./components/AttendanceForm";

function App(props) {
  const [students, setStudents] = useState(hogwartsStudentRegistry);

  function updateStudents(newStudents) {
    setStudents((prev) => [newStudents, ...prev]); // newStudents first as to have it on top rather than bottom
  }

  function createRegisterCard() {
    return students.map((registry) => {
      return <Register key={students.indexOf(registry)} name={registry.name} house={registry.house} time={registry.time} />;
    });
  }

  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">
          <div className="form-wrapper">
            <form className="attendance-form">
              <AttendanceForm updateStudents={updateStudents} />
            </form>
          </div>
        </div>
        <div className="app-rhs-container">
          <div className="register-wrapper">
            <div id="register-component-header">
              <span id="star-background">✷</span>
              <h2 className="component-title">Register</h2>
            </div>
            <div className="register-list">{createRegisterCard()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
