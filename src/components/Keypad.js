// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handleChange(e) {
    console.log("Entering password", e.target.value);
  }
  return (
    <div>
      <form>
        <label>Input: </label>
        <input
          type="password"
          placeholder="Enter password..."
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Keypad;
