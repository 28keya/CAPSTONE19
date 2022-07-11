var redrocketImg, redrocket;
var meteorImg, meteor, meteorsGroup;
var gameState ;
var backgroundImg;

function preload(){
 redrocketImg = loadImage("redrocket.png");
 meteorImg = loadImage("meteor.png") ;
 backgroundImg = loadImage("bg1.png");
}

function setup() {
 createCanvas(700,700);
 redrocket = createSprite(250,330);
 redrocket.scale = 0.6;
 redrocket.addImage("redrocket",redrocketImg);

 meteorsGroup = new Group();


 
}

function draw() {
 background(200);
 image(backgroundImg,0,0,width,height);
 backgroundImg.scale = 0.6;
 

 meteor = createSprite(50,11);
 meteor.addImage(meteorImg);
 meteor.scale = 0.3;
 meteor.lifetime = 3;
 meteorsGroup.add(meteor);
 meteor.x = Math.round(random(50,600))

 if(gameState == "play"){
     
     
    if(keyDown("up_arrow")){
       redrocket.y += -3;
    }

    if(keyDown("left_arrow")){
        redrocket.x = redrocket.x - 4;
    }

    if(keyDown("right_arrow")){
        redrocket.x = redrocket.x + 4
    }

    if(keyDown("down_arrow")){
        redrocket.y = redrocket.y + 4
    }
    
    

    drawSprites();
}

    
    if(gameState == "end"){
    if(meteorsGroup.isTouching(redrocket)){
        redrocket.velocityY = 0;
        gamestate == "end";
     }
     stroke("red");
     fill("red");
     textSize(40);
     text("Game Over");
     display();

     

 }
}

    
    


