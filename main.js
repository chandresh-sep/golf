var canvas = new fabric.Canvas("myCanvas")

ballx = 0;
bally = 0;
holex = 400;
holey = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("https://i.postimg.cc/qvwC7pbS/golf-h.png", function(Img){
    hole_obj = Img;
    hole_obj.scaleToWidth(50);
    hole_obj.scaleToHeight(50);
    hole_obj.set({top: holey, left: holex})
  })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("https://i.postimg.cc/qvwC7pbS/golf-h.png", function(img){
    ball_obj = img;
    ball_obj.scaleToWidth(50);
    ball_obj.scaleToHeight(50);
    ball_obj.set({top: bally, left: ballx})
  })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ballx == holex) && (bally == holey)){
    canvas.remove(ball_obj);
    document.getElementById('hd3').innerHTML="You have hit the goal";
  }	
	else{
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
    if(bally >= 5){
      bally = bally + block_image_width;
      canvas.remove(ball_obj);
      new_image();
    }
	}

	function down()
	{
    if(bally <= 450){
      bally = bally + block_image_width;
      canvas.remove(ball_obj);
      new_image();
    }
	}

	function left()
	{
		if(ballx >= 5)
		{
      ballx = ballx - block_image_width;
      canvas.remove(ball_obj);
      new_image();
		}
	}

	function right()
	{
		if(ballx <= 1050)
		{
      ballx = ballx + block_image_width;
      canvas.remove(ball_obj);
      new_image();
		}
	}
	
}
