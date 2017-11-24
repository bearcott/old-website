import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="dialogue">
          <h1>
            Hi! I'm <span>Benny Yan</span>, a full-stack developer focused on intuitive UX.
            Currently I'm working on making data visualization with React.
          </h1>
        </div>
      </div>
    );
  }
}
