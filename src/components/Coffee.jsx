import React from "react";
import plateA from "../static/plateA.svg";
import plateB from "../static/plateB.svg";
import cup from "../static/cup.svg";

export default ({ isSuspended, plateARef, plateBRef, cupRef, hidden }) => {
  return (
    <div className={`coffee ${isSuspended && "suspended"} ${hidden && 'hide'}`}>
      <Fume />
      <img className="shadow" />
      <img className="plate-b" src={plateB} ref={plateARef} />
      <img className="cup" src={cup} ref={cupRef} />
      <img className="plate-a" src={plateA} ref={plateBRef} />
    </div>
  );
};

const Fume = () => (
  <svg
    className="fume"
    x="0px"
    y="0px"
    width="280px"
    height="90px"
    viewBox="0 0 50 103"
  >
    <path fill="#FDD1AC" fillOpacity="0.2">
      <animate
        id="t0"
        attributeName="d"
        dur="0.5s"
        begin="0;t1.end"
        from="M0,66.718C0,40,12.663,30.967,15.989,15.391C18.279,4.667,11.124,0,11.124,0s34.333,11.637,33.365,34.287
          C43.996,45.824,40.215,49.417,32.946,74c-7,23.666,11.591,27.82,11.591,27.82s-16.906,0.555-28.391-5.052
          C2.279,90,0,81.052,0,66.718z"
        to="M0.01,59c-0.435-23.319,6.968-24.723,14.667-38.667c8.789-15.917,6-20.333,6-20.333s26.258,1.333,23,37.333
          c-1.041,11.5-10.334,23-7.667,40c3.825,24.382,10.926,24.486,10.926,24.486s-16.658-0.688-29.993-9.636
          C4.131,83.586,0.277,73.332,0.01,59z"
      />
    </path>
    <path fill="#FDD1AC" fillOpacity="0.2">
      <animate
        id="t1"
        attributeName="d"
        dur="0.5s"
        begin="t0.end"
        from="M0.01,59c-0.435-23.319,6.968-24.723,14.667-38.667c8.789-15.917,6-20.333,6-20.333s26.258,1.333,23,37.333
          c-1.041,11.5-10.334,23-7.667,40c3.825,24.382,10.926,24.486,10.926,24.486s-16.658-0.688-29.993-9.636
          C4.131,83.586,0.277,73.332,0.01,59z"
        to="M0,66.718C0,40,12.663,30.967,15.989,15.391C18.279,4.667,11.124,0,11.124,0s34.333,11.637,33.365,34.287
          C43.996,45.824,40.215,49.417,32.946,74c-7,23.666,11.591,27.82,11.591,27.82s-16.906,0.555-28.391-5.052
          C2.279,90,0,81.052,0,66.718z"
      />
    </path>
  </svg>
);
