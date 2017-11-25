import React from "react";
import Piece from "./Piece";

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio" className="portfolio" ref={this.props.containerRef}>
        <div
          className={`left ${(this.props.snapped || this.props.isPast) &&
            "snap"} ${this.props.isPast && "passed"}`}
        >
          <h1>portfolio</h1>
        </div>
        <div className="right">
          <div className="spacer" />
          {new Array(10).fill(true).map((x, i) => <Piece key={i} />)}
          <div className="clear" />
        </div>
        <div className="clear" />
      </div>
    );
  }
}
