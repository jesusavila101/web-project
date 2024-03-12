// Jesus.js
import React from "react";

const Jesus = () => {
  // Function to be executed when the button is clicked
  const handleButtonClick = () => {
    window.location.href = "https://main.dr4zv7blhbjjg.amplifyapp.com";
  };

  return (
    <div>
      {/* Heading for the Jesus page */}
      <h2>Jesus Page</h2>

      {/* Content for Jesus' page */}
      <p>This is the content for Jesus' page.</p>

      {/* (button) */}
      <button onClick={handleButtonClick}>click me</button>
    </div>
  );
};

export default Jesus;
