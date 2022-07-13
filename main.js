nosex=0;
nosey=0;

function preload(){
    moustache= loadImage('https://i.postimg.cc/k48nWBNF/m.png')
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO)
    video.size(400,400);
    video.hide();
   
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotPoses);
   }
   function modelloaded(){
       console.log('Posenet is Initialized');
   }
   function gotPoses(results){
    if (results.length > 0 ) {
     console.log(results);
     nosex= results[0].pose.nose.x;
     nosey= results[0].pose.nose.y;
     console.log("nosex=" + nosex);
     console.log("nosey=" + nosey);
    }
} 
   function draw(){
    image(video,0,0,400,400);
    image(moustache,nosex,nosey,40,40);
   }
    function take_snapshot(){
       save('moustachefilteredimage.png');
    }
   
