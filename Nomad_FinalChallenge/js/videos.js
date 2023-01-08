const videos = ["01.mp4","02.mp4","03.mp4",];


const videoPlay = videos[Math.floor(Math.random() * videos.length)];


const a = document.createElement( "video");
a.setAttribute("autoplay","true");
a.setAttribute("controls", "true" );
a.setAttribute("width", "800");
a.setAttribute("height", "600");

a.src = `videos/${videoPlay}`;

document.body.appendChild(a);

