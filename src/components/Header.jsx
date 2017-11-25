import React from "react";
import Coffee from "./Coffee";

const spanify = text => {
  return text.split(" ").map((x, i) => <span key={i}>{x} </span>);
};

export default ({ titleRef, onContactClick }) => {
  return (
    <div className="header">
      <div className="dialogue">
        <h1 ref={titleRef}>
          {spanify("Hi! I'm")}
          <span className="special">Benny Yan</span>
          {spanify(`, a full-stack developer focused on intuitive
          UX. Currently I'm working on making data visualization with React.`)}
          <br />
          <span className="link" onClick={onContactClick}>
            let's chat some time!
          </span>
        </h1>
      </div>
    </div>
  );
};
