//绘制组件的编写
// 接下去学习算法 如果算法有需要绘制完善的再回来进行完善


//绘制元素  绘制一个圆形 arc()  moveTo  lineTo()
	// 系统的学习 那么一些简单知识点不做深入的讲解。
	//快速可视化 
	function getXY(box, event){
		event = event; 
		var x = document.body.scrollLeft + (event.x || event.layerX);
		var y = document.body.scrollTop + (event.y || event.layerY);
		return {
			x:x,
			y:y
		}
	}

	var fastV = {
		version :"0.0.1"
	};
	// 初始化
	// 画布canvas渲染上下文  width height nodes links mouseX mouseY
	// 
	fastV.init = function(canvas){
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		this.nodes = [];  //节点集合
		this.links = [];  //边集合
		this.mouseX = 0;
		this.mouseY = 0;
		this.isMouseDown = false;
		this.canvas.onmousedown = function(event){
			fastV.isMousedown = true;
			var xy = getXY(fastV.canvas,event);
			fastV.mouseX = xy.x;
			fastV.mouseY = xy.y;

		};
		this.canvas.onmousemove = function(event){
			var xy = getXY(fastV.canvas,event);
			
			if(!fastV.isMousedown) return;
			fastV.ctx.clearRect(0,0,canvas.width,canvas.height)
			for(var i = 0; i< fastV.links.length; i++){
				fastV.links[i].draw(fastV.ctx);
			}
			for(var i = 0; i< fastV.nodes.length; i++){
				fastV.nodes[i].x = fastV.nodes[i].x + xy.x - fastV.mouseX;
				fastV.nodes[i].y = fastV.nodes[i].y + xy.y - fastV.mouseY;
				fastV.nodes[i].draw(fastV.ctx);
			}
			fastV.mouseX = xy.x;
			fastV.mouseY = xy.y;
		};
		this.canvas.onmouseup = function(event){
			fastV.isMousedown = false;
		};
	} 
	// id标识 width height x  y style 
	fastV.Node = function(id){
		this.id = id;
		this.width = 30;
		this.height = 30;
		this.x = 0;
		this.y = 0;
		this.style = {
			fillStyle:"71,167,184",
			fontSize:"10px"

		}
	}

	fastV.CircleNode = function(id,x,y){
		// 绘制圆形
		var node = new fastV.Node(id);
		node.r = 10;
		node.x = x;
		node.y = y;
		node.begin = 0;
		node.end = 2 * Math.PI;
		node.draw = function(ctx){
			var w = node.r * 2;
			ctx.save();
			ctx.moveTo(node.x,node.y);
			ctx.beginPath();
			ctx.fillStyle = 'rgba(' + this.style.fillStyle + ")";
			ctx.arc(node.x,node.y,node.r,this.begin,this.end,true);
			ctx.strokeText(node.id,node.x-5,node.y + 20);
			ctx.fill();
			ctx.closePath();
			ctx.restore(); // 恢复到最近保存的一个状态
		}
		return node;
	}
	// from  to  x1 y1  x2 y2
	fastV.Link = function(nodeA,nodeB){
		this.nodeA = nodeA;
		this.nodeB = nodeB;
		this.style = {
			strokeStyle:"116,166,250",
			lineWidth:2
		}
	}

	fastV.FLink = function(nodeA,nodeB){
		var link = new fastV.Link(nodeA,nodeB);
		link.draw = function(ctx){
			var x1 = this.nodeA.x;
			var y1 = this.nodeA.y;
			var x2 = this.nodeB.x;
			var y2 = this.nodeB.y;
			ctx.save();
			ctx.beginPath();
			ctx.strokeStyle = "rgba(" + this.style.strokeStyle + ")"; //透明度
			ctx.lineWidth = this.style.lineWidth;
			// ctx.moveTo(this.nodeA.x,this.nodeA.y);
			// ctx.lineTo(this.nodeB.x,this.nodeB.y);
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
			ctx.closePath();
			ctx.restore(); 
		}
		return  link;
	}

	fastV.draw = function(){
		this.ctx.clearRect(0,0,canvas.width,canvas.height);
		for(var i = 0;i<this.nodes.length;i++){
			this.nodes[i].draw(this.ctx);
		}
		for(var i = 0;i < this.links.length; i++){
			this.links[i].draw(this.ctx);
		}
	}