import iphone from "./static/collection/iphone.mov";
import iphoneDark from "./static/collection/iphoneDark.png";
import iphoneWhite from "./static/collection/iphoneWhite.png";

import easytimer from "./static/collection/easytimer.mov";
import easytimer1 from "./static/collection/easytimer1.png";
import easytimer2 from "./static/collection/easytimer2.png";

import fivemiles from "./static/collection/5miles.mov";
import fivemiles1 from "./static/collection/5miles.png";
import fivemiles2 from "./static/collection/5milesmob.png";

import earthack from "./static/collection/earthack.mov";
import earthack1 from "./static/collection/earthack.png";

import hdfw from "./static/collection/hdfw.mov";
import hdfw1 from "./static/collection/hdfw.png";
import hdfw2 from "./static/collection/hdfw2.png";

import eboogaloo from "./static/collection/eboogaloo.mov";
import eboogaloo1 from "./static/collection/eboogaloo.png";
import eboogaloo2 from "./static/collection/eboogaloo2.jpg";

import utdhackers from "./static/collection/utdhackers.mov";
import utdhackers1 from "./static/collection/utdhackers.png";

import legends from "./static/collection/legends.mov";
import legends1 from "./static/collection/legends.png";

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
  fivemiles: {
    title: "five miles landing page",
    desc: `this was one of my freelance contract jobs that I did freshman year of college.
    It was a really fun experience- I got to visit their office and they gave me a free t-shirt!
    Love these guys!`,
    video: fivemiles,
    images: [
      {
        src: fivemiles1,
        desc: "web/tablet view"
      },
      {
        src: fivemiles2,
        desc: "its responsive!"
      }
    ]
  },
  earthack: {
    title: "earthack 2017",
    desc: `HackDFW teamed up with EarthDay to create this environmental hackathon. I had the pleasure
    of making this website in a couple of hours in my free time. Was really fun drawing everything in
    illustrator!`,
    video: earthack,
    images: [
      {
        src: earthack1,
        desc: "really just inspired by the earth"
      }
    ]
  },
  hdfw: {
    title: "Hackdfw",
    desc: `I've been with HackDFW ever since its inception when me and 2 other UTD students wanted
    to create a hackathon for the DFW area. It has been a blast through all the experiences I've had
    with them. This was the last homepage I designed for them before I became too busy with studies
    to participate any more.`,
    video: hdfw,
    url: `http://hackdfw.com/`,
    images: [
      {
        src: hdfw1,
        desc: "top part"
      },
      {
        src: hdfw2,
        desc: "contact form- dont send spam plz"
      }
    ]
  },
  utdhackers: {
    title: "UTDHackers",
    desc: `To foster a spirit for hackathons at UTD, me and a bunch of friends created this group
    to host workshops, events, and parties for fellow hackers. This was the first home page for this
    organization. After moving on from freshman year though, we handed off the reigns to new fish.`,
    video: utdhackers,
    url: `http://hackersutd.com/`,
    images: [
      {
        src: utdhackers1,
        desc: "green and orange are our school colors"
      }
    ]
  },
  legends: {
    title: "Legends.ai",
    desc: `Legends.ai is a side project i'm currently working on and am very passionate about. Its
    an analytics platform for one of my favorite games, League of Legends. I've learned much of my
    data vizualization skills from making this website. Please! Check it out!`,
    video: legends,
    url: `https://legends.ai/`,
    images: [
      {
        src: legends1,
        desc: "gaming sites have to be dark because its cool"
      }
    ]
  },
  eboogaloo: {
    title: "electric boogaloo - HackPrinceton Fall 2016",
    desc: `This was probably one of my best hackathon experiences. It was a cold fall- me and my friend
    Cyrus arrived at the hackathon without any clue of what to do. After spending about half of our 32 hours
    to hack, we came up with some idea involving this monstrosity. He churned out the hardware while I churned out
    the frontend in the few hours we had left. Somehow managed to win best overall, best hardware, and best design!`,
    video: eboogaloo,
    url: `https://devpost.com/software/electric-boogaloo-6vuwx0`,
    images: [
      {
        src: eboogaloo1,
        desc: "the ui, nothing amazing"
      },
      {
        src: eboogaloo2,
        desc: "this was the cool part. 2 arduinos in that baby"
      }
    ]
  }
};

export default [
  WORKS.legends,
  WORKS.fivemiles,
  WORKS.hdfw,
  WORKS.iphone,
  WORKS.earthack,
  WORKS.utdhackers,
  WORKS.easytimer,
  WORKS.eboogaloo
];
