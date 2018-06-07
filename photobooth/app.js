import {populateVideo, drawToCanvas} from './src/video'

async function go() {
  console.log('working?');

  const video = document.querySelector('video');
  const canvas = document.querySelector('canvas');
  const strip = document.querySelector('.strip');
  const filterButtons = document.querySelectorAll('button.filter');
  const countdownButton = document.querySelector('.count');

  if(!video) throw new Error('THere is no video');
  await populateVideo(video);

  //sizing canvas to video
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;

// start to draw the video
let interval = setInterval(() => {
  drawToCanvas(video, canvas);
}, 16);

}


//go on page load...
go();



// this is just a little bit of code that makes our tooling reload the page if and then the modules are updated. For development only
if (module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
