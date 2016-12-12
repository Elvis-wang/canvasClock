var Radius=8;
var rLeft=30;
var rTop=100;
window.onload=function(){
	var oCan=document.getElementById("can");
	var cxt=oCan.getContext("2d");
	setInterval(function(){
		render(cxt);
	},500);
};

function render(cxt){
	cxt.clearRect(0,0,1000,500);
	var oDate=new Date;
	var hours=oDate.getHours();
	var minutes=oDate.getMinutes();
	var seconds=oDate.getSeconds();
	
	renderDigit(rLeft,rTop,parseInt(hours/10),cxt);
	renderDigit(rLeft+15*(Radius+1),rTop,parseInt(hours%10),cxt);
	renderDigit(rLeft+30*(Radius+1),rTop,10,cxt);
	renderDigit(rLeft+39*(Radius+1),rTop,parseInt(minutes/10),cxt);
	renderDigit(rLeft+54*(Radius+1),rTop,parseInt(minutes%10),cxt);
	renderDigit(rLeft+69*(Radius+1),rTop,10,cxt);
	renderDigit(rLeft+78*(Radius+1),rTop,parseInt(seconds/10),cxt);
	renderDigit(rLeft+93*(Radius+1),rTop,parseInt(seconds%10),cxt);
	
};

function renderDigit(x,y,num,cxt){
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(Radius+1)+(Radius+1),y+i*2*(Radius+1)+(Radius+1),Radius,0,360);
				cxt.closePath();
				cxt.fillStyle="rgba(0,102,135,1)";
				cxt.fill();
			}
		};
	};
};
