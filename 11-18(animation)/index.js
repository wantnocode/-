/*
			获取画布
			获取渲染上下文2d
		*/
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		/*
			绘制一个矩形并让它动起来
			1.绘制一个矩形
			2.动态修改它的绘制坐标 达到动起来的效果
		*/

		// let rect ={
		// 	x:10,
		// 	y:10,
		// 	width:200,
		// 	height:200
		// }

		// /*
		// 	绘制
		// */
		// function draw(){
		// 	ctx.clearRect(0,0,canvas.width,canvas.height);
		// 	ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		// 	rect.x = rect.x + 10;
		// 	if(rect.x > canvas.width - rect.width){
		// 		rect.x = 0;
		// 	}

		// }


		// setInterval(draw,10);


		
		/*
			绘制一个百分比进度的动画
			1.绘制俩个圆形
			2.需要绘制圆形的上层部分动态绘制
			3.绘制文字 跟绘制圆形绑定起来
		*/

		// let PI = Math.PI  * 2/100;  //绘制弧度100等分
		// let rate = -25;  //终点弧度值
		// function draw(){
		// 	ctx.clearRect(0,0,canvas.width,canvas.height);

		// 	ctx.beginPath();
		// 	ctx.strokeStyle = "#fff";
		// 	ctx.lineWidth = 15;
		// 	ctx.arc(220,220,150,0,Math.PI * 2);
		// 	ctx.stroke();

		// 	ctx.beginPath();
		// 	ctx.fillStyle = "#fff";
		// 	ctx.font = "80px Lato";
		// 	if(rate === 75){
		// 		ctx.fillText(rate + 25 + "%",120,250);
		// 	}else{
		// 		ctx.fillText(rate + 25 + "%",160,250);
		// 	}
		// 	ctx.stroke();

		// 	ctx.beginPath();
		// 	ctx.strokeStyle = "red";
		// 	ctx.lineWidth = 15;
		// 	ctx.arc(220,220,150,PI * -25,PI * rate);

		// 	ctx.stroke();
		// }
		// // setInterval()
		// function animate(){
		// 	if(rate < 75){
		// 		rate++;
		// 		draw()
		// 		window.requestAnimationFrame(animate)
		// 	}

		// }
		// animate();

		/*
			实现一个粒子效果
			1.绘制粒子
			2.绘制连线
			3.动态绘制粒子 连线
			4.添加交互行为 (第5小节事件交互)
		*/

		
		canvas.width = document.body.clientWidth;
		canvas.height = document.body.clientHeight;
		let warea = {
			x:null,
			y:null,
			max:2000
		}
		window.onmousemove = function(e){
			warea.x = e.clientX;
			warea.y = e.clientY;
		}

		window.onmouseout = function(e){
			warea.x = null;
			warea.y = null;
		}
		var dots = [];
		for(var i = 0; i < 200; i++){
			dots.push({
				x:Math.random() * canvas.width,
				y:Math.random() * canvas.height,
				xa: Math.random() * 2,
				ya: Math.random() * 2,
				max:6000
			})
		}
		var dots2 = dots.concat(warea);
		function animate(){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			for(var i = 0; i < dots.length; i ++){

				var dot = dots[i];

				dot.x += dot.xa;
				dot.y += dot.ya;
				// 正向还是反向
				dot.xa *= dot.x > canvas.width || dot.x < 0 ? -1 : 1;
				dot.ya *= dot.y > canvas.height || dot.y < 0 ? -1 : 1;

				ctx.fillStyle = "#fff";
				ctx.fillRect(dot.x,dot.y,3,3);
				for(var j = 0; j < dots2.length; j ++){
					//(x1-x2) * (x1- x2)  + (y1-y2) * (y1-y2)

					var d = dots2[j];
					if(dot === d || d.x === null || d.y === null)continue;
					var xc = dot.x - d.x;
					var yc = dot.y - d.y;
					var dis = (d.x - dot.x) * (d.x - dot.x)  + (d.y - dot.y) * (d.y - dot.y);  // 计算俩点之间的距离
					if(dis < d.max){
						if(d === warea){
							dot.x -= xc * 0.04;
							dot.y -= yc * 0.04;
						}
						ctx.beginPath();
						ctx.strokeStyle = "#fff";
						ctx.lineWidth = 0.1;
						ctx.moveTo(dot.x,dot.y);
						ctx.lineTo(d.x,d.y);
						ctx.stroke();
					}
				}
				
			}
			window.requestAnimationFrame(animate)
		}
		window.requestAnimationFrame(animate)