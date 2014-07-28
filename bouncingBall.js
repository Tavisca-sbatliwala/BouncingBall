
var bouncingBall;
var x_Cooridinate,y_Coordinate;
var min_X_Coordinate = 0;
var max_X_Coordinate= window.innerWidth;
var min_Y_Coordinate= 0;
var max_Y_Coordinate=window.innerHeight;
var valueToAddInX=20;
var valueToAddInY=20;

function start()
{
   bouncingBall = document.getElementById("circle");
   bouncingBall.style.position= 'absolute'; 
   bouncingBall.style.left = '50px'; 
   bouncingBall.style.top='50px';
   bouncingBall.style.width='30px';
   bouncingBall.style.height='30px';
   bouncingBall.style.borderRadius = '50%';
   bouncingBall.style.backgroundColor='#993366';
   ballAnimation();
   window.setInterval(ballAnimation,100);

}

function ballAnimation()
{
    max_X_Coordinate= window.innerWidth;
    max_Y_Coordinate=window.innerHeight;
	  x_Cooridinate= parseInt(bouncingBall.style.left);
    y_Coordinate= parseInt(bouncingBall.style.top); 
    x_Cooridinate +=valueToAddInX;
    y_Coordinate += valueToAddInY;
    boundaryCondition();
    bouncingBall.style.left = x_Cooridinate + "px";
    bouncingBall.style.top = y_Coordinate + "px";
}

function boundaryCondition()
{
	   
	 if(x_Cooridinate>max_X_Coordinate || x_Cooridinate<min_X_Coordinate){
	 	valueToAddInX =- valueToAddInX;
	 }
        
    if(y_Coordinate>max_Y_Coordinate || y_Coordinate<min_Y_Coordinate){
    	valueToAddInY=-valueToAddInY;
    }
        
}

window.onload=start;