function Hurn(){

	this.x = 80;
	this.y = height/2-70;
	this.gravity = 0.4;
	this.velocity = 0.3;
	this.lift = -8;

	this.show = function() {
		stroke(255);
		ellipse(this.x,this.y,50,50);
	}

	this.up = function() {
		this.velocity += this.lift;
		console.log(this.velocity);
	}

	this.update = function() {
		this.velocity+=this.gravity;
		this.y=this.velocity+this.y;

		if (this.y > height-10) {
			this.y = height-10;
			this.gravity = 2;
		}

		if (this.y < 50) {
			this.y = 50;
			this.gravity = -2;
		}
	}
}