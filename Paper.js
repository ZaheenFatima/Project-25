class paper {
    constructor (x,y,radius){
        var paper_options = {
            restitution : 0.5,
            friction : 1.5,
            density :0.3
        }      
this.body = Bodies.circle(x,y,radius,paper_options);
this.radius = 20;
this.image = loadImage("paper.png");
World.add(world,paper);
    }
   display (){
  ellipseMode(RADIUS);
  ellipse(this.body.position.x,this.body.position.y,20);
  imageMode(RADIUS);
  image(this.image,100,650,50,50);
}
}