import React from "react";

function Student(props) {
  return (
    <div className="student-record">
      <div className="student-record-info">
        <img className="student-record-house-badge" alt="student record house badge" src={`hogwarts-img/${props.house.toLowerCase()}.png`} />
        <div className="student-record-class-info">
          <h2 className="student-record-student-name">{props.name}</h2>
          <h3>{props.house}</h3>
          <h3>{props.time}</h3>
        </div>
      </div>
    </div>
  );
}

export default Student;
