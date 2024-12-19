import React from "react";

import "./resume.scss";
import Footer from "../footer/Footer";

const Resume = () => {
  return (
    <div>
      <div className="container resume-container">
        <div className="resume">
          <div className="resume-text">
            <h1>Alisher Abdurahimov</h1>
            <p className="resume-paragraph">
              Frontend dasturlashga qiziqaman va vebtexnologiyalarni o‘rganishda
              davom etmoqdaman. React va boshqa zamonaviy frontend
              texnologiyalardan foydalangan holda interaktiv va foydalanuvchilar
              uchun qulay veb-ilovalarni yaratishga intilaman
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
