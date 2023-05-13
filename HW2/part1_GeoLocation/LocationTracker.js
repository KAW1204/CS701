 (function() {

    window.onload = init;

    var startButton;
    var path = [];
    var lastMarker = null;
    
    var counter = 0;
    
    var latitude, longitude;

    // register the event handlers

    function init() {
    	startButton = document.getElementById("startButton");
    	startButton.onclick = startTrackingLocation;
        
    }

    function startTrackingLocation() {
		navigator.geolocation.getCurrentPosition(displayLocation);
        
        
    }
    
    function displayLocation(){
		latitude = Math.random()/100; //Make latitude and longitude random
		longitude = Math.random()/100;
		
		document.getElementById("startButton").disabled = true;
		
		document.getElementById("latitude").innerHTML = "Start Latitude: " + latitude;
		document.getElementById("longitude").innerHTML = "Start Longitude: " + longitude;
		
		document.getElementById("counter").innerHTML = "Update#: " + 0; 
		
	    
	   
		showOnMap(latitude, longitude);
			
		
		
	}
	
	function showOnMap(latitude, longitude){
		
		var googlePosition = new google.maps.LatLng(latitude,longitude);
		
		var mapOptions = {
		zoom: 15,
		center: googlePosition,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	
	var mapElement = document.getElementById("map");
	map = new google.maps.Map(mapElement, mapOptions);
	latlong = new google.maps.LatLng(latitude, longitude);
	bounds = new google.maps.LatLngBounds();
	bounds.extend(googlePosition);
	
	path.push({lat: latitude, lng: longitude})
	
	var FirstMarker =  addMarker(map, latlong, "Your new location", "You moved to: " + latitude + ", " + longitude);
	
	path.push({lat: latitude, lng: longitude});
	
     setInterval(() => {
			showSamplePath();
			
		}, 5000)
	
	
	
	
		
	}
	
	function addMarker(map, latlongPosition, title, content) {
		
		var options = {
			position: latlongPosition,
			map: map,
			title: title,
			clickable: true
			
		};
		
		var marker = new google.maps.Marker(options);
		
		var popupWindowOptions = {
			content: content,
			position: latlongPosition
			
		};
		
		var popupWindowOtions = new google.maps.InfoWindow(popupWindowOptions);
		
		return marker;
		
	}
	
	function showSamplePath(){
		counter++;
		latitude = latitude + Math.random() / 100; //update latitude and longitude
		longitude = longitude -  Math.random() / 100;
		
		
		 document.getElementById("currentLatitude").innerHTML = "Current Latitude: " + latitude; //set current latitude
		 document.getElementById("currentLongitude").innerHTML = "Current Longitude: " + longitude;
		 
		 document.getElementById("counter").innerHTML = "Update#: " + counter; 
		
		latlong = new google.maps.LatLng(latitude, longitude); 
		bounds.extend(latlong);
		
		path.push({lat: latitude, lng: longitude}); //add coordinates to array
		
		var line = new google.maps.Polyline({ //trace path using array coordinates
			path: path,
			strokeColor: '#0000ff',
			strokeOpacity: 1.0,
			strokeWeight: 3
		
		});
		
		line.setMap(map);
		
		if(lastMarker)
		lastMarker.setMap(null);
		lastMarker =  addMarker(map, latlong, "Your new location", "You moved to: " + latitude + ", " + longitude);
		
		
		
	}
	


})();









