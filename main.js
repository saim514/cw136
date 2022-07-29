video = ""

function preload()
{
 video = createVideo("video.mp4");
 video.hide();
}

function setup()
{
 canvas = createCanvas(750, 550);
 canvas.center();
 
}

function draw()
{
 image(video, 0, 0, 750, 650);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function modelLoaded()
{
    console.log("Just go on youtube :|");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}