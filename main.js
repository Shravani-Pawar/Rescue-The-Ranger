var canvas = new fabric.Canvas('myCanvas');


//Set initial positions for ball and hole images.
ball_x=0;
ball_y=0;
hole_y=200;
hole_x=800;

block_image_width = 40;
block_image_height = 40;

function load() {
    fabric.Image.fromURL("happy.JPG",function (Img)
    {
        hole_obj=Img;
        hole_obj.scaleToWidth(90);
       hole_obj.scaleToHeight(90);
        hole_obj.set({
        top:hole_y,
        left:hole_x
        });
        canvas.add(hole_obj);
    });
new_image();

}

function new_image()
{{
    fabric.Image.fromURL("plane.png",function (Img)
    {
        ball_obj=Img;
        ball_obj.scaleToWidth(90);
        ball_obj.scaleToHeight(90);
        ball_obj.set({
        top:ball_y,
        left:ball_x
        });
        canvas.add(ball_obj);
    });

}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y))
	{   canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You Have Rescued The Ranger !";
		document.getElementById("para").innerHTML = "Yaaay!";
		document.getElementById("myCanvas").style.borderColor="yellow";}
    {
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
}
	function up()
	{
		if(ball_y >= 0)
		{
			ball_y = ball_y - block_image_height;
			console.log("Block Image Height = "+block_image_height);
			console.log("Up Key Pressed x ="+ball_x+",y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y =ball_y + block_image_height;
			console.log("block image height ="+ block_image_height);
			console.log("when down arrow key is pressed,X = "+ ball_x +",Y="+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width;
			console.log("Block Image Width = "+block_image_width);
			console.log("Left Key Pressed x ="+ball_x+",y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_width;
			console.log("Block Image Width = "+block_image_width);
			console.log("Right Key Pressed x ="+ball_x+",y = "+ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	




	