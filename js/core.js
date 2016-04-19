function bgCanvas() {
  const canvas = $('canvas.logoJumbo')[0];
  const ctx = canvas.getContext('2d');
  const logoImg = $('<img/>').attr('src','/img/logo-thin.svg')[0];
  const bgColor = $('body').css('background-color') || '#FFF8E7';

  this.ensureCanvasSize = ()=>{
    const width = window.innerWidth;
    const height = window.innerHeight;
    const ratio = window.devicePixelRatio || 1;
    // 1. Ensure the element size stays the same.
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    // 2. Increase the canvas dimensions by the pixel ratio.
    canvas.width = width*ratio;
    canvas.height = height*ratio;
  }
  function drawImage() {
    const ratio = window.devicePixelRatio || 1;
    const docW = window.innerWidth*ratio;
    const docH = window.innerHeight*ratio;
    const imageH = docH;
    const imageW = docH*logoImg.width/logoImg.height;

    ctx.beginPath();
    ctx.rect(0,0,docW,docH);
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.globalCompositeOperation = 'destination-out';
    ctx.drawImage(
      logoImg,
      docW-3*imageW/4,
      -docH*.1,
      imageW*1.2,
      imageH*1.2
    );
  }
  this.drawImage = ()=>{
    if (logoImg.complete) drawImage();
    logoImg.onload = ()=>{
      drawImage();
    }
  }
}


$(function() {

  const can = new bgCanvas();
  can.ensureCanvasSize();
  can.drawImage();

  $(window).on('resize',function() {
    can.ensureCanvasSize();
    can.drawImage();
  })

});
