noseX = 0;
noseY = 0;

function preload(){
    nose_pic = loadImage('Clown-Nose.png');
}

function setup(){
    canvas = createCanvas(400, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Loaded')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log('nose X = '+ results[0].pose.nose.x);
        console.log('nose Y = '+ results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 400, 300);
    image(nose_pic, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save("Clown_Photo.png");
}