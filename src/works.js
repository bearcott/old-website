import iphone from "./static/collection/iphone.mov";
import iphoneDark from "./static/collection/iphone.mov";
import iphoneWhite from "./static/collection/iphone.mov";
export default [
  {
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
  }
];
