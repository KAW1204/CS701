(function() {

    window.onload = init;

    var startButton;
    var a_worker; //Define a worker
    var data = [];
    var numbers_start = [];
    var numbers_end = [];
    var range;
    var workercount; //Define workercount
    var list_of_tasks = []; //storage for local host
    var results = 0;
    var sum = 0;
    
    
    
    
    
    
    

    function init() {
    	startButton = document.getElementById("startButton");
    	startButton.onclick = sendDataToWorkers;
    }

    // Complete the following code
    
    // Handle messages received from the Web Worker
    function handleReceipt(event) {
		data.push(event.data); //Push the info returned from worker into array
		sum = sum + event.data.result; //add up all the results from the worker
	
		document.getElementById('sum').innerHTML = sum; //assign sum to the innerHTML 
		
		var resultList = document.getElementById('items'); //get all the items from the element
		
		localStorage.setItem("storage_Wilkerson", JSON.stringify(data)); //Turn data from string to JSon
		
		results = document.createElement('li');
		
		results.appendChild(document.createTextNode(JSON.stringify(event.data)));
		
		resultList.appendChild(document.createTextNode(JSON.stringify(event.data)));
		
		var ul_storage = document.getElementById('storageItems');
		
		var list_storage = document.createElement('li');
		
		storage.push(JSON.parse(localStorage.storage_Wilkerson));//push all the storage updates into an array
		
		for(var p = 0; p < storage.length; p++){
			var dataobj = JSON.stringify(storage[p][p]); //Stringify each data info stored in storage
			
			list_storage.appendChild(document.createTextNode(dataobj));
			
			ul_storage.appendChild(list_storage);
		}
		
		results.appendChild(document.createTextNode(JSON.stringify(event.data)));
		
		
    }

    // Complete the following code
    
   

    // send messages to the Web Workers
    function sendDataToWorkers(e) {
        startButton.disabled = true;
        
        range = document.getElementById("range").value; //set te range to the range of object
        workercount = document.getElementById("numWorkers").value;
        
        add_start_end();
        
        for(var p = 0; p < workercount; p++){
			a_worker = new Worker('computeWorker.js'); //Create a worker
			a_worker.addEventListener("message", handleReceipt, false); //add event listener
			
			
			a_worker.postMessage({ ///Create object
				index: p,
				start: numbers_start[p],
				end: numbers_end[p]
				
				})
			 
			
		}
		
		

        

    }

    // Feel free to add any helper methods
    function add_start_end(){
		
		
		for(var p = 0; p < workercount; p++){
			var end = Math.floor(Math.random() * range); //random number below range
			var start = Math.floor(Math.random()* end); //random number below end so all numbers would be between 1-range
			
			numbers_start.push(start); //push both numbers to array for use later
			numbers_end.push(end);
			
			
			
		}
	}



})();

























