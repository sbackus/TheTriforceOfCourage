// http://img850.imageshack.us/img850/2588/linkf.png

function Link() {
	this.facing = "right";
	this.image = images[0];
	this.facing_left_image = images[0];
	this.facing_right_image = images[1];
	this.width = 100;
	this.height = 100;
	this.max_y = height-this.height;
	this.x = 0;
	this.y = this.max_y;
	this.frameSize = 100;
	this.time = 0;
	this.frames = 5;
	this.frame_rate = 6;
	this.action = "standing";
	this.speed = 2;
	this.gravity = 0.2;
	this.y_velocity = 0;
	this.jumping = false;

	this.draw =  function(){
		var draw_frame = 0
		if(this.facing == "left"){
			draw_frame = 100*(this.frames%4)
			this.image = this.facing_left_image;
		}else if(this.facing == "right"){
			draw_frame = 100*(4 - this.frames%4)
			this.image = this.facing_right_image;
		}	
		if (this.jumping){
			gameCanvas.drawImage(this.image, 0, 400,this.frameSize,this.frameSize,this.x,this.y,this.frameSize,this.frameSize);
		}
		else if (this.action == "standing"){
			gameCanvas.drawImage(this.image, 0, 0,this.frameSize,this.frameSize,this.x,this.y,this.frameSize,this.frameSize);
		} 
		else if (this.action == "running"){
			gameCanvas.drawImage(this.image, 100*(this.frames%4), 400,this.frameSize,this.frameSize,this.x,this.y,this.frameSize,this.frameSize);
		}
		else if (this.action == "attack1"){
			gameCanvas.drawImage(this.image, draw_frame, 800,this.frameSize,this.frameSize,this.x,this.y,this.frameSize,this.frameSize);
		}
		else if (this.action == "crouching"){
			gameCanvas.drawImage(this.image, 0, 200,this.frameSize,this.frameSize,this.x,this.y,this.frameSize,this.frameSize);
		}

	};
	this.update = function(){
		this.time ++;
		if(this.time%this.frame_rate == 0){
			this.frames ++;
		}
		this.action = "standing"
		if(keys[key.space]) {
			this.frames = 0;
			this.time = 0;
			this.action = "attack1";
		} else if(this.frames<5){
			this.action = "attack1";
		}else if(keys[key.down]||keys[key.s]){
			this.action = "crouching"
		}else if((keys[key.left]||keys[key.a]) && this.x>0){
			this.facing = "left";
			this.action = "running";
			this.x -= this.speed;
		}else if((keys[key.right]||keys[key.d]) && this.x<(width-this.width)) {
			this.facing = "right";
			this.action = "running";
			this.x += this.speed;
		}
		if((keys[key.up]||keys[key.w])&& !this.jumping){
			this.y_velocity = -5;
			this.jumping = true;
		}
		if(this.y > this.max_y)
	    {
	        this.y = this.max_y;
	        this.y_velocity = 0;
	        this.jumping = false;
	    }if(this.jumping){
	    	this.y_velocity += this.gravity;
    		this.y += this.y_velocity;
	    }
	    
		

	};
};