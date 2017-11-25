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
      isCupSuspended: false,
      selectedPiece: undefined
    };
  }
  componentDidMount() {
    polyfill();
    this.onScroll();
    window.addEventListener("scroll", this.onScroll);
  }
  componentWillUpdate(nextProps, nextState) {
    //hardcode the window to not scroll
    if (nextState.selectedPiece >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  onScroll = e => {
    const distFirst = window.pageYOffset / window.innerHeight;
    const pH = this.portfolio && this.portfolio.offsetHeight;
    const distPort = window.pageYOffset / pH;
    //fill opacity
    if (this.fill) {
      if (distFirst < 1) {
        this.fill.style.opacity = distFirst;
      }
    }
    //toggle view state
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
    //suspend the cup
    if (window.pageYOffset > 5) {
      if (!this.state.isCupSuspended) {
        this.setState({ isCupSuspended: !this.state.isCupSuspended });
      }
    } else {
      if (this.state.isCupSuspended) {
        this.setState({ isCupSuspended: !this.state.isCupSuspended });
      }
    }
    //what to do in header
    if (this.state.scrollPos === POS.HEADER) {
      if (this.title) {
        const childLen = this.title.childNodes.length;
        this.title.childNodes.forEach((x, i) => {
          if (x.nodeName === "SPAN") {
            const opacity = 1 - distFirst * (childLen * 1.4 - i) / 2;
            if (opacity > -0.2) {
              x.style.opacity = opacity;
              // x.style.transform = `translate(0,${distFirst *
              //   i /
              //   childLen /
              //   1.4 *
              //   window.innerHeight}px)`;
            } else {
              x.style.opacity = 0;
            }
          }
        });
      }
      if (this.cup) {
        this.cup.style.transform = `
          translate(0,-${distFirst * 4 * window.innerHeight}px)
          rotate(-${distFirst * 100}deg)
        `;
      }
      [this.plateA, this.plateB].forEach(x => {
        if (x) {
          x.style.transform = `
            translate(0,-${distFirst * 3 * window.innerHeight}px)
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
          className={`fill ${POSNUM[this.state.scrollPos] >=
            POSNUM[POS.PORTFOLIO] && "port"} ${this.state.scrollPos ===
            POS.CONTACT && "rev"}`}
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
            selectedPiece={this.state.selectedPiece}
            onClick={piece => this.setState({ selectedPiece: piece })}
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
