var bullsEyeModule = (function() {

    window.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;

    var delay = false;

    // Interval
    var timerId;
    

    function init() {
        
            canvas = document.getElementById("testCanvas");
            context = canvas.getContext("2d");

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            
            // draw the initial pattern
            drawPattern();
    }
    
   

    // called whenever the slider value changes or the delay checkbox is clicked
    function drawPattern()
    {
        if (timerId) {
            clearInterval(timerId);
            timerId = undefined;
        }
         
        context.clearRect(0, 0, canvas.width, canvas.height);
        var timer = 0; //Sets how long the delay is
       
        
        
        var bandWidth = document.getElementById("band").value;
        var new_width = 170;
        var current_color;
        document.getElementById("widthDisplay").value = bandWidth;

        delay = document.getElementById("delay").checked;
        
        if(delay == true){ //If delay box check set the delay to 1.5s
			var timer = 1500;
		}
		
        
        timerId = setInterval(() => { //Acts as while loop
			
			
        if(new_width > 0){ //While the width is greater than 0
        
        if(current_color == "blue"){
			current_color = "red";
			
		}
        
        else if(current_color == "red") { //If color is red make it blue
			current_color = "blue";
			
		}
		
		else{
			current_color = "red";
		}
		
        context.lineWidth = 3; //Create the circle
        context.beginPath();
        context.arc(200,190, new_width ,0, 2 * Math.PI, true);
        context.fillStyle = current_color;
        context.fill();
        
        
        
        context.stroke();
        context.closePath();
        
        new_width = new_width - bandWidth; //New width of the smaller circle
        
    
        }
        
        }, timer);
        
        
        
              
    }
    
    



    return {
        drawPattern: drawPattern
    };

})();






