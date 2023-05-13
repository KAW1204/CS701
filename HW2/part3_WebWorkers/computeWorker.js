self.onmessage = messageHandler;

function messageHandler(e) {
    let data = e.data;
   
    console.log("Received", data);

    let result = 0;
    var start = data.start;
    var end = data.end;
    

    // Write the code to compute the desired result
    for(var p = start; p <= end; p++){
		result = result + (p*p); //add up the square 
	}
    




    data.result = result;

    // Timeout delay 

    setTimeout(function () {
        self.postMessage(data);
        self.close();
    }, Math.floor(Math.random() * 10000));

    
}

