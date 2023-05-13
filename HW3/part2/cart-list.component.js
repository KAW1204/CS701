angular.module("cartApp")
  .component('cartList', {
    templateUrl: 'cart-list/cart-list.template.html',
    controller: function CartListController() {

      if (localStorage.getItem("Wilkerson_cart") == null){
		  this.defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      
				
			}
			
			
	else{
		this.defaultBooks = JSON.parse(localStorage.Wilkerson_cart); //Use local storage if any exist
		
		
	}
			
      
      
      this.removeBook = function(index) {
		  this.defaultBooks.splice(index,1); //Remove from list
        

      }
      
      this.addBook = function() {
		  this.defaultBooks.push({title: "New Book", qty: 1, price: 10.99}); //Add a new book to store
		  return this.defaultBooks;
          

      }
      
      this.saveBooks = function() {
		  window.localStorage.setItem('Wilkerson_cart',JSON.stringify(this.defaultBooks)); //Save to local storage
		  
		  return this.defaultBooks
          
      }
      
      this.updateTotal = function() { //Iterate through list to add up prices
          var total = 0;
          
           angular.forEach(this.defaultBooks, function(book){
			  if(book.title){
			      total = + total + (book.price * book.qty);
			      }
		  
		  });
  
          return total;
          
      }


    }
  });
  