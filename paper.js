class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.1,
            friction:5,
            density:0.5

			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, (this.r)/2 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			ellipseMode(CENTER);
			imageMode(CENTER);
			//strokeWeight(4);
			fill(225)
			//circle(0,0,this.r);
			image(this.image,0,0,this.r,this.r);
			pop()
		
    }
	}