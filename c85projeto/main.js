var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var largura_carro = 75;
var altura_carro = 100;
var backgroundImage = "parkingLot.jpg";
var greencarImage = "car2.png";
var xCarro = 5;
var yCarro = 225;

function add() {
	bg_img_tag = new Image();
	bg_img_tag.onload = uploadBackground;
	bg_img_tag.src = backgroundImage;

	carro_img_tag = new Image();
	carro_img_tag.onload = uploadGreenCar;
	carro_img_tag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	ctx.drawImage(carro_img_tag, xCarro, yCarro, largura_carro, altura_carro);

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
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
	if(yCarro>=0){
        yCarro = yCarro - 10;
        uploadBackground();
        uploadGreenCar();
    }
}

function down()
{
	if(yCarro<=500){
        yCarro = yCarro + 10;
        uploadBackground();
        uploadGreenCar();
    }
}

function left()
{
	if(xCarro>=0){
        xCarro = xCarro - 10;
        uploadBackground();
        uploadGreenCar();
    }
}

function right()
{
	if(xCarro<=900){
        xCarro = xCarro + 10;
        uploadBackground();
        uploadGreenCar();
    }
}
