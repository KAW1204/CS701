var rotationsModule = (function() {


	function changeSpeed() {
        var track = 0; //tracks the spiners
		var duration = document.getElementById("duration").value;
	    document.getElementById("durationDisplay").value = duration + 's';

	    // Fill in the rest of the code to change the dur attributes of the four animations
	    var spin_anim = document.getElementsByTagName("animateTransform"); //Gets the elements from the animation
	    //Iterate through the circles so each of them are controlled by the duration
	    while(track < spin_anim.length){
			spin_anim.setAttribute('dur', duration); //set each circle to the duration length
			track++;
			
		}
	    

	    

	}

	return {
        changeSpeed: changeSpeed
    };

})();