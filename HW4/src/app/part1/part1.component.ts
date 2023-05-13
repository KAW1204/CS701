import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css']
})

export class Part1Component implements OnInit  {
	
	defaultBooks: Array<any>;
	
        constructor() {
		if (localStorage.getItem("Wilkerson_cart") == null){
		  this.defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      
      
				
			}
			
			
	else{
		this.defaultBooks = JSON.parse(localStorage['Wilkerson_cart']);
		
	}
			
        }
   

      removebooks(index:number) { //removes book
		  return this.defaultBooks.splice(index,1);
		  
		  
		 
     


      }
      
      addbook():Array<any> { //Add book 
		  this.defaultBooks.push({title: "New Book", qty: 1, price: 10.99});
		  
		  
		  return this.defaultBooks;
		  
     

      }
      
         saveBooks():Array<any> { //save books
		  window.localStorage.setItem('Wilkerson_cart',JSON.stringify(this.defaultBooks));
		  
		  return this.defaultBooks;
     

      }
      
      
      updateTotal():number { //Iterate through books and add up prices
          let total:number = 0;
          
          for(var p = 0; p < this.defaultBooks.length; p++){
			   if(this.defaultBooks[p].title){
			      total = + total + (this.defaultBooks[p].price * this.defaultBooks[p].qty);
			      }
		  }
          
          return total;
     
			
			     
			      
			  
		 
      
     



        
      }
      
      ngOnInit(): void {
    
}
      
     
      
     



          
      
        

    }
	
	


