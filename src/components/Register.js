import React from "react";
import Student from "./Student";

function Register(props) {
  const { name, house, time } = props;
  return <Student name={name} house={house} time={time} />;
}

export default Register;
