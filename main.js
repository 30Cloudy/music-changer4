song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

scoreLeftWristX = 0;
scoreLeftWristY = 0;

song1_status = "";
song2_status = "";

function preload()
{
    song = loadSound("music.mp3");
    song1 = loadSound("music2.mp3")
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
    song1_status = song.isPlaying(); song1_status = song1.isPlaying();
    fill("#FF0000");
    stroke("FF0000");
}

    if(scoreLeftWrist > 0.2)
    {
    circle(leftWristX, leftWristY,20);
    song.stop();
    if(song1_status == false)
    {song1.play();
        document.getElementById("song").innerHTML = "Playing - Peter Pan So"
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        scoreLeftWrist = results[0].pose.keypoints[10].score;
        console.log(results);
        scoreLeftWrist =  results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"leftWristY = "+ leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"rightWristY = "+ rightWristY);
    }
}
