var animModule = (function() {

    window.onload = init;

    var numberofrows = 5;
    
    // displacement of ball for each step
    var dx = 5;
        
    function init() {
        
        var canvas = document.getElementById("testCanvas");
        var context = canvas.getContext("2d");
        var brickHeight = 15;
        var brickWidth = 25;
        var brickSpace = 2;
    }
      
   
    
        
    // draw current position on the canvas
    function drawBallOnCanvas() {

        // Clear the canvas

        context.fillStyle = '#D3C0C0';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        //Create square
        
        
        for(var i = 0; i < numberofrows; i++){
        context.lineWidth = 3;
        context.beginPath();
        context.fillRect(5,7,brickWidth,brickHeight)
        context.fillStyle = current_color;
        context.fill();
        context.stroke();
        context.closePath();

        }
        
       
       
        
       
        
       
        
        
        
        
          
       
        



        
        
    }
        

    

})();












