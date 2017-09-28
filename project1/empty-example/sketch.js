var hurn
function setup(){
	createCanvas(600,600);
	hurn = new Hurn();
}

function draw(){
	background(0);
	rect(10,50,578,538);
	hurn.show();
	hurn.update();
}

function keyPressed() {
	if (key == ' ') {
		hurn.up();
	}
}