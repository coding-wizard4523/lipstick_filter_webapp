nose_x =0;
nose_y =0;
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
} 
function draw() {
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,30,30)
}
function takeSnapshot() {
    save('myFilterImage.PNG')
}
function modelLoaded() {
    console.log("Model Loaded");
}
function gotPoses(results) {
if (results.length>0)
{
    console.log(results);
    nose_x = results[0].pose.nose.x-10;
    nose_y = results[0].pose.nose.y;
    console.log("nose_x ="+nose_x);
    console.log("nose_y ="+nose_y);
}
}
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/YCvKwLtn/lipstick-image.png')
}