import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="contact" className="footer" ref={this.props.containerRef}>
        <div className="logo" />
        <h1>Bearcott</h1>
        <div className="social">
          <a href="http://bearcott.com/resume/">Resume</a>&middot;
          <a href="https://github.com/bearcott">GitHub</a>&middot;
          <a href="https://www.linkedin.com/in/bennyyan">LinkedIn</a>&middot;
          <a href="https://www.facebook.com/beeeennnyyyy">Facebook</a>&middot;
          <a href="https://twitter.com/bearcott">Twitter</a>
        </div>
        <div className="social">
          Email:
          <a href="">bear@bearcott.com</a>
          Cell:
          <span>(707) 500 - 2190</span>
          Skype:
          <span>bear.cott</span>
        </div>
      </div>
    );
  }
}
