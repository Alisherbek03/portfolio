import React, { useEffect, useState } from "react";
import "./homesection.scss";

import Img from "../../assets/portfolio.png";

import { TiArrowDown } from "react-icons/ti";
import Footer from "../footer/Footer";

// Icons
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const HomeSection = () => {
  const texts = ["React Dev", "JS Dev"];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[textIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText("");
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);
  return (
    <div>
      <div className="container homesection-style">
        <div className="homesection">
          <div className="homesection-img">
            <img src={Img} alt="" />
          </div>
          <div className="homesection-text">
            <h1>Alisher Abdurahimov</h1>
            <a
              className="download-cv"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <TiArrowDown className="arrow-icon" />
            </a>
            <div className="homesection-animation">
              <p>I am</p>
              <span>{currentText}</span>
            </div>
            <div className="icons">
              <a
                className="icon-link"
                href="https://t.me/webtexnology"
                target="_blank"
              >
                <FaTelegram />
              </a>
              <a
                className="icon-link"
                href="https://www.instagram.com/abdurax1mov_"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                className="icon-link"
                href="https://github.com/Alisherbek03"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                className="icon-link"
                href="https://www.linkedin.com/in/alisher-abdurahimov-922744266"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeSection;
