window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback){
				window.setTimeout(callback, 1000/60);
			};
})();

var width = 500;
var height = 400;

var images = [];
var doneImages = 0;
var requiredImages = 0;

var gameCanvas = document.getElementById("gameCanvas").getContext("2d");

var keys = [];

var key = {
	up: 38,
	down: 40,
	left: 37,
	right: 39,
	space: 32,
	w: 87,
	a: 65,
	s: 83,
	d: 68,
}

function loop(){
	
	requestAnimFrame(function(){
		loop();
	});
	update();
	render();

}

$(document).keydown(function(e){
	e.preventDefault();
	keys[e.keyCode ? e.keyCode : e.which] = true;
});

$(document).keyup(function(e){
	e.preventDefault();
	delete keys[e.keyCode ? e.keyCode : e.which];
});


function init(){
	
	loop();
	// DON'T PUT ANYTHING AFTER THE GAME LOOP STARTS!
}

function update(){
	
}

function render(){
	
}

gameCanvas.font = "bold 50px monaco";
gameCanvas.fillStyle = "black";
gameCanvas.fillText("loading",width/2-100,height/2);

loadImages(["images/linkf.png"]);

checkImages();
