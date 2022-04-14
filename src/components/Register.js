import React from "react";
import Student from "./Student";

function Register(props) {
  return <Student name={props.name} house={props.house} time={props.time} />;
}

export default Register;
