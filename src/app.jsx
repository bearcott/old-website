import React from "react";
import "normalize.css";
import "./styles/index.scss";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="bg"/>
        <div className="wrapper">
        <Header />
        <Portfolio />
        </div>
      </div>
    );
  }
}
