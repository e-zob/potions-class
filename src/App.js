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

  function getFormContainer() {
    return (
      <div className="form-wrapper">
        <form className="attendance-form">
          <AttendanceForm updateStudents={updateStudents} />
        </form>
      </div>
    );
  }

  function getRegisterContainer() {
    return (
      <div className="register-wrapper">
        <div id="register-component-header">
          <span id="star-background">✷</span>
          <h2 className="component-title">Register</h2>
        </div>
        <div className="register-list">{createRegisterCard()}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="title">Potions Class</header>
      <div className="app-wrapper">
        <div className="app-lhs-container">{getFormContainer()}</div>
        <div className="app-rhs-container">{getRegisterContainer()}</div>
      </div>
    </div>
  );
}

export default App;
