//fr 算法  首先算法晦涩。或者某些概念是比较难理解的。
// 然后本节课主要是学习一个算法的思路   代码尽量是通俗易懂的伪代码。

// 

var  FRlayout  = function (nodes,links){
	this.nodes = nodes;
	this.links = links;
	this.AREA_M = 1000;  //画布乘法器
	this.area = 200;
	this.gravity = 2;
	this.SPEED_DIVISOR = 800; 
	this.speed = 50;
}


FRlayout.prototype.newLayoutData = function(){
	var layoutData = {
		dx:0.0,
		dy:0.0

	}
	return layoutData;
}


FRlayout.initAlgo = function(){
	var self = this;
	self.area = self.nodes.length / 2;
	//forEach 改变原数组
	self.nodes.forEach(function(n){
		n.layoutData = self.newLayoutData();
	})
}

FRlayout.prototype.goAlgo = function(){
	var self = this;
	var nodes = self.nodes;
	var maxDisplace = Math.sqrt(self.AREA_M * self.area) / 10;
	var k =  Math.sqrt((self.AREA_M * self.area)  / nodes.length); //弹簧的系数

	nodes.forEach(function(N1,i){
		N1.layoutData.dx = 0;
		N1.layoutData.dy = 0;
		nodes.forEach(function(N2,i){
			// 计算斥力
		})
	})

	var links = self.links;
	links.forEach(function(E){
		//引力计算
	})


	nodes.forEach(function(n){
		// 通过斥力与引力的求值计算最终偏移的一个值
	})


	
}
FRlayout.runlayout = function(sum){
	//算法运行 迭代固定次数 或者力很小
	var i = 0;
	while(i++ < sum){
		this.goAlgo();
	}
}



