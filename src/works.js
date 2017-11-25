import iphone from "./static/collection/iphone.mov";
import iphoneDark from "./static/collection/iphoneDark.png";
import iphoneWhite from "./static/collection/iphoneWhite.png";

import easytimer from "./static/collection/easytimer.mov";
import easytimer1 from "./static/collection/easytimer1.png";
import easytimer2 from "./static/collection/easytimer2.png";

const WORKS = {
  iphone: {
    title: "single element iphone 4",
    desc: `Back in 2014 there was a fad for making beautiful art 
    using a single <i/> tag. Here was my attempt with an iPhone 4!`,
    url: `http://bearcott.com/iphone4/`,
    video: iphone,
    images: [
      {
        src: iphoneDark,
        desc: "dark version"
      },
      {
        src: iphoneWhite,
        desc: "light version"
      }
    ]
  },
  easytimer: {
    title: "easy timer",
    desc: `Back in highschool I got really tired of the timers my teachers
    would use to time our exams and experiments. So I made my own! I kinda went overboard
    and added a bunch of features that I was probably never going to use.
    I'll visit again one day and make it even more easy to use.`,
    url: `http://bearcott.com/easytimer/`,
    video: easytimer,
    images: [
      {
        src: easytimer1,
        desc: "dark view"
      },
      {
        src: easytimer2,
        desc: "custom background image"
      }
    ]
  },
}

export default [
  WORKS.iphone,
  WORKS.easytimer
];
