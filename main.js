noseX =0;
noseY =0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,500);
    canvas.position(750,100);
    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded(){
    console.log ('Pose Net is Initialized');
}

function draw(){
    background('#808080');
    textSize(10)
    fill('#F90093');
    stroke('#F90093');
    text('Peter',50,400)

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"noseY"+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = "+leftWristX+"rigthWristX = "+rightWristX+"difference = "+difference);
    }
}