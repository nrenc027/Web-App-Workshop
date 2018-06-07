
export  const drawToCanvas = async (video, canvas, filter)=> {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
  }

export const populateVideo  = async(video)=>{
    const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
  video.srcObject = stream;
  await video.play();

}