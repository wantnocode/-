/*
	获取canvas画布的渲染上下文
	getContext()
	//openGL 3d
*/

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


/*
	绘制矩形
	fillRect(x,y,width,height); //填充矩形
	x 为绘制矩形的横坐标
	y 为绘制矩形的纵坐标
	width矩形宽度
	height矩形高度
	strokeRect(x,y,width,height); // 描边矩形
	x 为绘制矩形的横坐标
	y 为绘制矩形的纵坐标
	width矩形宽度
	height矩形高度
	clearRect(x,y,width,height); // 清除指定的矩形区域
	x 为绘制矩形的横坐标
	y 为绘制矩形的纵坐标
	width矩形宽度
	height矩形高度
*/

// ctx.fillRect(10,10,100,100);

// ctx.strokeRect(120,120,100,100);

// ctx.clearRect(50,50,20,20);

/*
 绘制矩形
 *atuor xiaotian
 *time 11-17
 @param state 1为填充 2为描边 3为清除
 @param x 为横坐标
 @param y 为纵坐标
 @param w 为矩形宽度
 @param h 为矩形高度
*/
function draw_rect(state,x,y,w,h){
	if(state === 1){
		ctx.fillRect(x,y,w,h);
	}else if(state === 2){
		ctx.strokeRect(x,y,w,h);
	}else if(state === 3){
		ctx.clearRect(x,y,w,h);
	}else{
		console.error("'请核实你的参数");
	}
}

// draw_rect(1,10,10,80,80);
// draw_rect(2,120,120,80,80);
// draw_rect(3,50,50,20,20);


/*
	绘制直线(实线,虚线)
	beginPath() 创建新路径
	closePath() 关闭路径
	moveTo(x,y) 移动到起点
	lineTo(x,y)连线到某一点(终点)
	setLineDash(array) 连线模式
	[p1,p2]线段长度 p1线段长度 p2线段间距
*/

// ctx.beginPath();
// // ctx.setLineDash([5,10]);
// ctx.setLineDash([5,15]);
// ctx.moveTo(10,100);
// ctx.lineTo(200,100);
// ctx.closePath();
// ctx.stroke();

/*

*/
// function draw_line(){

// }

/*
	绘制三角形
	beginPath() 创建新路径
	closePath() 关闭路径
	moveTo(x,y) 移动到起点
	lineTo(x,y) 连线到某一点(终点)
	stroke() //描边矩形 fill() 填充矩形
*/

// ctx.beginPath();
// ctx.moveTo(75,50);
// ctx.lineTo(100,75);
// ctx.lineTo(100,25);
// ctx.lineTo(75,50);
// // ctx.fill();
// ctx.stroke();


// function(){

// }

/*
	绘制圆形 圆弧
	arc(x,y,radius,startAngle,endAngle,abticlockwise) //绘制圆形
	x 横坐标
	y 纵坐标
	radius 圆半径
	startAngle 起点(弧度)
	endAngle  终点弧度
	abticlockwise 选择方向 顺时针还是逆时针  true 顺时针 false逆时针 默认true;
	arcTo(x,y,x2,y2,radius) 绘制圆弧
	当前坐标点分别与控制点xy 1 与控制点2 x2,y2连接的直线 作为半径绘制圆的切线形成的圆弧
*/

// ctx.beginPath();
// ctx.arc(100,100,60,0,Math.PI * 2);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(150,20);
ctx.arcTo(150,100,50,20,30);
ctx.stroke();
