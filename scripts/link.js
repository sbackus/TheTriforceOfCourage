// http://img850.imageshack.us/img850/2588/linkf.png

function Link() {
	this.image = images[0];
	this.x = 0;
	this.y = 0;
	this.width =  10;
	this.height =  10;
	this.frameSize = 100;
	this.time = 0;
	this.frames = 0;
	this.frame_rate = 6;

	this.draw =  function(){
		gameCanvas.drawImage(this.image, 100*(this.frames%4), 500,this.frameSize,this.frameSize,0,0,this.frameSize,this.frameSize);
	};
	this.update = function(){
		this.time ++;
		if(this.time%this.frame_rate == 0){
			this.frames ++;
		}
	};
};