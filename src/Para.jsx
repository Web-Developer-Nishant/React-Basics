import React from "react";

const fname = "Nishant";
const lname = "Gautam";
const date = new Date();

function Para() {
  return (
    <>
      <p contentEditable="true">{fname + " " + lname}</p>
      <p>You are a web developer at woco</p>
      <p>{`Current date is ${date.toLocaleDateString()}`}</p>
      <p>{`Current Time is ${date.toLocaleTimeString()}`}</p>
    </>
  );
}

export default Para;
