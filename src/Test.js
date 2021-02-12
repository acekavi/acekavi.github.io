import React from "react";

function Test() {
  return (
    <div className="Test"> 
      This is my first <b>web</b> page<br />
      This is my first <i>web</i> page<br />
      {/* This is my first <b><i>web</b></i> page<br /> */}
      This is my first <b><i>web</i></b> page<br />
    </div>
  )
}

export default Test;
