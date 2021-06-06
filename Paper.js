class Paper	{
	constructor(x,y,radius) {
		var options={
            restitution : 0.3,
            friction : 0,
            density : 1.2		
			}

		this.x=x;
		this.y=y;
        this.image = loadImage("paper.png");
		this.body=Bodies.circle(x, y,100, options);
 		World.add(world, this.body);

	}
	display(){
			
			var paperPos=this.body.position;		
            
			push()
			translate(paperPos.x, paperPos.y);
			rectMode(CENTER);
			strokeWeight(4);
			fill(128,128,128);
			image(this.image,0,0,80,80);
			pop();			
	}

}