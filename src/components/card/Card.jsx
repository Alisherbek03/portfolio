import React from "react";

import "./card.scss";

const Card = ({
  hyperlink,
  imglink,
  saytname,
  htmllink,
  Css,
  Reactlink,
  text,
  Jslin,
  Tslink
}) => {
  return (
    <div>
      <div className="card">
        {imglink && <img src={imglink} alt="" />}
        {saytname && <h1>{saytname}</h1>}
        <div className="technology">
          {htmllink && <span className="html-style">{htmllink}</span>}
          {Css && <span className="css-style">{Css}</span>}
          {Jslin && <span className="js-style">{Jslin}</span>}
          {Reactlink && <span className="react-style">{Reactlink}</span>}
          {Tslink && <span className="ts-style">{Tslink}</span>}
        </div>
        {text && <p>{text}</p>}
        {hyperlink && (
          <a href={hyperlink} target="_blank">
            See website
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
