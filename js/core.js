function baseCanvas(query) {
  that = {};
  that.canvas = $(query)[0];
  that.ctx = that.canvas.getContext('2d');
  return that;
}
function logoCanvas() {
  const that = baseCanvas('canvas.logoJumbo');
  const logoImg = $('<img/>').attr('src','/img/logo-thin.svg')[0];
  const bgColor = $('body').css('background-color') || '#FFF8E7';
  that.ensureCanvasSize = ()=>{
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;
    // 1. Ensure the element size stays the same.
    that.canvas.style.width = width + 'px';
    that.canvas.style.height = height + 'px';
    // 2. Increase the canvas dimensions by the pixel ratio.
    that.canvas.width = width*ratio;
    that.canvas.height = height*ratio;
  }
  function drawImage() {
    const ratio = window.devicePixelRatio || 1;
    const docW = window.innerWidth*ratio;
    const docH = window.innerHeight*ratio;
    const imageH = docH;
    const imageW = docH*logoImg.width/logoImg.height;

    that.ctx.beginPath();
    that.ctx.rect(0,0,docW,docH);
    that.ctx.fillStyle = bgColor;
    that.ctx.fill();
    that.ctx.globalCompositeOperation = 'destination-out';
    that.ctx.drawImage(
      logoImg,
      docW-3*imageW/4,
      -docH*.1,
      imageW*1.2,
      imageH*1.2
    );
  }
  that.draw = ()=>{
    if (logoImg.complete) drawImage();
    logoImg.onload =()=>{
      drawImage();
    }
  }
  return that;
}

function bgCanvas() {
  const that = baseCanvas('canvas.background');
  const bgImg = $('<img/>').attr('src','/img/background.jpg')[0];


  that.ensureCanvasSize = ()=>{
    const width = window.innerWidth;
    const height = window.innerHeight;
    that.canvas.width = width;
    that.canvas.height = height;

    //for that pixel effect
    that.ctx.mozImageSmoothingEnabled = false;
    that.ctx.imageSmoothingEnabled = false;
  }
  function drawImage(scaleNum, offsetNumX, offsetNumY) {
    const canW = that.canvas.width*1.1;
    const canH = that.canvas.height*1.1;
    const scale = (scaleNum) ? scaleNum : 0.1;
    const offsetX = (offsetNumX) ? offsetNumX : 0;
    const offsetY = (offsetNumY) ? offsetNumY : 0;

    that.ctx.drawImage(bgImg,offsetX,offsetY,canW*scale,canH*scale);
    that.ctx.drawImage(that.canvas,0,0,canW*scale,canH*scale,0,0,canW,canH);
  }
  that.draw = ()=>{
    if (bgImg.complete) drawImage();
    bgImg.onload = ()=>{
      drawImage();
    }
  }
  that.shine = ()=>{

  }
  that.flicker = (rateNum)=>{
    var i = 0;
    const rate = (rateNum !== undefined) ? rateNum : 8;
    that.flickering = setInterval(()=>{
      drawImage(0.08,Math.cos(i++/rate)/rate,-Math.cos(i/rate)/rate);
    },120)
  }
  that.flicker.stop = ()=>clearInterval(that.flickering)
  return that;
}


$(function() {

  const logoCan = logoCanvas();
  const bgCan = bgCanvas();
  logoCan.ensureCanvasSize();
  logoCan.draw();
  bgCan.draw();
  bgCan.ensureCanvasSize();
  bgCan.flicker(3);

  $(window).on('resize',function() {
    logoCan.ensureCanvasSize();
    logoCan.draw();
    bgCan.ensureCanvasSize();
    bgCan.draw();
  })

});
