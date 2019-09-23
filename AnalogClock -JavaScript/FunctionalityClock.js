//Javascript code for an analog Clock <3 

const canvas=document.getElementById("theClock");
const ctx=canvas.getContext("2d");

ctx.translate(500,300);
let radius=300;

drawFace(ctx,radius);
drawMarkers(ctx);
calcHands(ctx,radius);	

setInterval(drawClock,1000);//Keeps calling the function.

function drawClock()
{//Calls all the functions
drawFace(ctx,radius);
drawMarkers(ctx);
calcHands(ctx,radius);
}

function drawFace(ctx,radius)//Fills the circle with white Color.
{
	ctx.beginPath();
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle='black';
	ctx.fill();
	ctx.stroke();
	ctx.beginPath()
	ctx.arc(0,0,30,0,2*Math.PI);
	ctx.fillStyle='gray';
	ctx.fill()
}

function drawMarkers(ctx){
//Drawing the markers for hour
	for(let i=0;i<12;i++)
	{
		
		ctx.beginPath();
		ctx.rotate(Math.PI/6);	
		ctx.moveTo(0,-250);
		ctx.lineTo(0,-300);
		ctx.stroke();
	}	
}

function calcHands(ctx,radius)
{
	const now=new Date();
	const hours=now.getHours();//Current Time and Date
	const minutes=now.getMinutes();
	const seconds=now.getSeconds();

	const seconds_angle=(seconds*Math.PI/30);//Seconds Hand
	drawHand(ctx,seconds_angle,radius*0.9,10);

	const hours_angle=(hours*Math.PI/6);//Hours Hand
	drawHand(ctx,hours_angle,radius*0.5,30);

	const minutes_angle=(minutes*Math.PI/30)+(seconds*Math.PI/(30*60));//Minutes Hand
	drawHand(ctx,minutes_angle,radius*0.75,20);
	

}
//Drawing the Hand
function drawHand(ctx,angle,length,girth){

  ctx.beginPath();
  ctx.lineCap='round';
  ctx.lineWidth=girth;
  ctx.strokeStyle='gray';
  ctx.moveTo(0,0);
  ctx.rotate(angle);
  ctx.lineTo(0,-length);
  ctx.stroke();
  ctx.rotate(-angle);
  ctx.lineWidth=5
}

