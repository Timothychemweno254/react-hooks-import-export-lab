import React from "react";

function About() {
  const image = "https://via.placeholder.com/215";  // Defined internally
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;