import React from "react";
import Piece from "./Piece";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className={`left ${this.props.snapped && "snap"}`}>
          <h1>portfolio</h1>
        </div>
        <div className="right">
          <div className="spacer" />
          {new Array(10).fill(true).map(x => <Piece />)}
        </div>
      </div>
    );
  }
}
