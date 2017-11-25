import React from "react";
import "normalize.css";
import "./styles/index.scss";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Coffee from "./components/Coffee";
import { polyfill } from "smoothscroll-polyfill";

const POS = {
  HEADER: "HEADER",
  PORTFOLIO: "PORTFOLIO",
  CONTACT: "CONTACT"
};

const POSNUM = {
  HEADER: 1,
  PORTFOLIO: 2,
  CONTACT: 3
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: POS.HEADER,
      isCupSuspended: false
    };
  }
  componentDidMount() {
    polyfill();
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  }
  onScroll = e => {
    const distFirst = window.pageYOffset / window.innerHeight;
    const pH = this.portfolio && this.portfolio.offsetHeight;
    const distPort = window.pageYOffset / pH;
    if (this.fill) {
      if (distFirst < 1) {
        this.fill.style.opacity = distFirst;
      }
    }
    if (
      distPort < 1 &&
      distFirst >= 1 &&
      this.state.scrollPos != POS.PORTFOLIO
    ) {
      this.setState({ scrollPos: POS.PORTFOLIO });
    } else if (distFirst < 1 && this.state.scrollPos != POS.HEADER) {
      this.setState({ scrollPos: POS.HEADER });
    } else if (distPort >= 1 && this.state.scrollPos != POS.CONTACT) {
      this.setState({ scrollPos: POS.CONTACT });
    }
    if (window.pageYOffset > 5) {
      if (!this.state.isCupSuspended) {
        this.setState({ isCupSuspended: !this.state.isCupSuspended });
      }
    } else {
      if (this.state.isCupSuspended) {
        this.setState({ isCupSuspended: !this.state.isCupSuspended });
      }
    }
    if (this.state.scrollPos === POS.HEADER) {
      if (this.title) {
        const childLen = this.title.childNodes.length;
        this.title.childNodes.forEach((x, i) => {
          if (x.nodeName === "SPAN") {
            const opacity = 1 - distFirst * (childLen * 1.4 - i) / 2;
            if (opacity > -0.1) {
              x.style.opacity = opacity;
              x.style.top =
                distFirst * i / childLen / 1.4 * window.innerHeight + "px";
            }
          }
        });
      }
      if (this.cup) {
        this.cup.style.transform = `
          translateY(-${distFirst * 4 * window.innerHeight}px)
          rotate(-${distFirst * 100}deg)
        `;
      }
      [this.plateA, this.plateB].forEach(x => {
        if (x) {
          x.style.transform = `
            translateY(-${distFirst * 3 * window.innerHeight}px)
            rotate(${distFirst * 10}deg)
          `;
        }
      });
    }
  };
  onContactClick = () => {
    if (this.footer) {
      this.footer.scrollIntoView({ behavior: "smooth" });
    }
  };
  render() {
    return (
      <div className="app">
        <div className="bg" />
        <div
          className={`fill ${this.state.scrollPos === POS.CONTACT && "rev"}`}
          ref={x => (this.fill = x)}
        />
        <div
          className={`frame ${
            this.state.scrollPos !== POS.HEADER ? "" : "hide"
          }`}
        />
        <div className="wrapper">
          <Header
            titleRef={x => (this.title = x)}
            onContactClick={this.onContactClick}
          />
          <Portfolio
            containerRef={x => (this.portfolio = x)}
            snapped={this.state.scrollPos === POS.PORTFOLIO}
            isPast={POSNUM[this.state.scrollPos] > POSNUM[POS.PORTFOLIO]}
          />
          <Footer containerRef={x => (this.footer = x)} />
        </div>
        <div
          className={`table ${
            this.state.scrollPos === POS.HEADER ? "" : "hide"
          }`}
        />
        <div className="cup-holder">
          <Coffee
            hidden={this.state.scrollPos !== POS.HEADER}
            isSuspended={this.state.isCupSuspended}
            cupRef={x => (this.cup = x)}
            plateARef={x => (this.plateA = x)}
            plateBRef={x => (this.plateB = x)}
          />
        </div>
      </div>
    );
  }
}
