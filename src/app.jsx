import React from "react";
import "normalize.css";
import "./styles/index.scss";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

const POS = {
  HEADER: "HEADER",
  PORTFOLIO: "PORTFOLIO"
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: POS.HEADER
    };
  }
  componentDidMount() {
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = e => {
    const distFirst = window.pageYOffset / window.innerHeight;
    if (this.fill) {
      this.fill.style.opacity = distFirst;
    }
    if (distFirst >= 1 && this.state.scrollPos != POS.PORTFOLIO) {
      this.setState({ scrollPos: POS.PORTFOLIO });
      console.log(this.state.scrollPos);
    }
    if (distFirst < 1 && this.state.scrollPos != POS.HEADER) {
      this.setState({ scrollPos: POS.HEADER });
    }
  };
  render() {
    return (
      <div className="app">
        <div className="bg" />
        <div className="fill" ref={x => (this.fill = x)} />
        <div
          className={`frame ${(this.state.scrollPos === POS.HEADER && "hide")}`}
        />
        <div className="wrapper">
          <Header />
          <Portfolio snapped={this.state.scrollPos === POS.PORTFOLIO} />
        </div>
      </div>
    );
  }
}
