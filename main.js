canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var carWidth = 80;
var carHeight = 100;
var carx = 10;
var cary = 10;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add() {
	backgroundpic = new Image();
    backgroundpic.onload=uploadBackground;
    backgroundpic.src=background_image;
    carimage = new Image();
    carimage.onload=uploadgreencar;
    carimage.src=greencar_image;
}

function uploadBackground() {
    ctx.drawImage(backgroundpic, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {

    ctx.drawImage(carimage, carx, cary, carWidth, carHeight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cary > 0){
        cary-=10;
        uploadBackground();
		uploadgreencar();
    }
}

function down()
{
	if(cary < 500){
        cary+=10;
        uploadBackground();
		uploadgreencar();
}}

function left()
{
	if(carx > 0){
        carx-=10;
        uploadBackground();
		uploadgreencar();
    }
}

function right()
{
	if(carx < 720){
        carx+=10;
		uploadBackground();
		uploadgreencar();
    }
}
