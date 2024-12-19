import React from "react";

import "./input.scss";

const Input = () => {
  return (
    <div className="input">
      <input className="text-input" type="text" placeholder="Enter your name" />
      <input className="text-input" type="text" placeholder="Enter your email" />
      <input className="text-input" type="text" placeholder="Enter your theme" />
      <input className="text-input" type="text" placeholder="Enter your text" />
      <button className="contact-button">Send</button>
    </div>
  );
};

export default Input;
