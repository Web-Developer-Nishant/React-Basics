import React from "react";


let curDate = new Date().getHours()
// console.log(curDate);
let greeting = "";

let cssStyle= {backgroundColor: "rgb(155, 163, 245)"}

if ( curDate < 12) {
  greeting = "Good Morning";
  cssStyle.color= "green"
  
}
else if (curDate >= 12 && curDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color= "white"
}
else {
  greeting = "Good Night";
  cssStyle.color= "black"
}

function Heading(){

    return <h1>Hello, <span style={cssStyle}>{greeting}</span></h1>
}

export default Heading;