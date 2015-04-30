// http://img850.imageshack.us/img850/2588/linkf.png

function Link() {
	this.facing = "right";
	this.image = images[0];
	this.facing_left_image = images[0]
	this.facing_right_image = images[1]
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
		var draw_frame = 0
		if(this.facing == "left"){
			draw_frame = 100*(this.frames%4)
			this.image = this.facing_left_image;
		}else if(this.facing == "right"){
			draw_frame = 100*(4 - this.frames%4)
			this.image = this.facing_right_image;
		}
		if (this.action == "standing"){
			gameCanvas.drawImage(this.image, 0, 0,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		} 
		else if (this.action == "running"){
			gameCanvas.drawImage(this.image, 100*(this.frames%4), 400,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		}
		else if (this.action == "attack1"){
			gameCanvas.drawImage(this.image, draw_frame, 800,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
		}

	};
	this.update = function(){
		this.time ++;
		if(this.time%this.frame_rate == 0){
			this.frames ++;
		}
		this.action = "standing"
		if(keys[key.left]||keys[key.a]) {
			this.facing = "left";
			this.action = "running";
		}
		if(keys[key.right]||keys[key.d]) {
			this.facing = "right";
			this.action = "running";
		}
		if(keys[key.space]) {
			this.frames = 0;
			this.time = 0;
			this.action = "attack1";
		}
		if(this.frames<5){
			this.action = "attack1";
		}

	};
};