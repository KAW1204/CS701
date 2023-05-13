import { Pipe, PipeTransform, ViewChild } from '@angular/core';

@Pipe({
  name: 'reorder'
})

export class TokenizerPipe implements PipeTransform {
	

  transform(value: any, args?: any): any {
	  var new_string:string = ""; //Create string to hold the full string
	  var new_value:string = value.split(" "); //Split the value into seperated characters
	  var new_array = [];
	  var last_name = new_value[1];
	  var first_name = new_value[0]

	  new_array.push(last_name)
	  new_array.push(first_name);
	  
	  
		  
		  
	 //Add the words together
		  
		  
	  

	 
      return new_array; //return new string
  }
  
  

}


