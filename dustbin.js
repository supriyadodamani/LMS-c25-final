class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		this.image=loadImage("dustbingreen.png");
		this.body=Bodies.rectangle(this.x,this.y,200,200);

	}
	display()
	{
		//imageMode(CENTER);
		//image(this.image,this.body.position.x,this.body.position.x,200,200);

		rectMode(CENTER);
		//rect(this.body.position.x,this.body.position.y,100,100);
image(this.image,this.body.position.x,this.body.position.y,120,120);

			
	}

}