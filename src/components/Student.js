import React from "react";

function Student(props) {
  const { name, house, time } = props;
  return (
    <div className="student-record">
      <div className="student-record-info">
        <img className="student-record-house-badge" alt="student record house badge" src={`hogwarts-img/${house.toLowerCase()}.png`} />
        <div className="student-record-class-info">
          <h2 className="student-record-student-name">{name}</h2>
          <h3>{house}</h3>
          <h3>{time}</h3>
        </div>
      </div>
    </div>
  );
}

export default Student;
