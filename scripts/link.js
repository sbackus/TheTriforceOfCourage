// http://img850.imageshack.us/img850/2588/linkf.png

function Link() {
	this.image = images[0];
	this.x = 0;
	this.y = 0;
	this.width =  10;
	this.height =  10;
	this.frameSize = 100;
	this.time = 0;
	this.frames = 5;
	this.frame_rate = 6;
	this.action = "standing";

	this.draw =  function(){
		if (this.action == "standing"){
			gameCanvas.drawImage(this.image, 0, 0,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		} 
		else if (this.action == "running_left"){
			gameCanvas.drawImage(this.image, 100*(this.frames%4), 400,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		}
		else if (this.action == "running_right"){
			gameCanvas.drawImage(this.image, 100*(this.frames%4), 500,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		}
		else if (this.action == "attack1"){
			gameCanvas.drawImage(this.image, 100*(this.frames%4), 800,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		}

	};
	this.update = function(){
		this.time ++;
		if(this.time%this.frame_rate == 0){
			this.frames ++;
		}
		this.action = "standing"
		if(keys[key.left]||keys[key.a]) {this.action = "running_left"}
		if(keys[key.right]||keys[key.d]) {this.action = "running_right"}
		if(keys[key.space]) {
			this.frames = 0
			this.time = 0
			this.action = "attack1"
		}
		if(this.frames<5){
			this.action = "attack1"
		}

	};
};