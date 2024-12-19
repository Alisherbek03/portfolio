import React from "react";
import Input from "../input/Input";

import "./contact.scss";
import Footer from "../footer/Footer";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container contact-container">
        <div className="inputs">
          <h1>Contact me</h1>
          <div>
            <Input />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
