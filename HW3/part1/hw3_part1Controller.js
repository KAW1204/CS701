angular.module('myApp', [])
.controller('CartControler', function ($scope) {
	
	if (localStorage.getItem("Wilkerson_cart") == null){
		  var defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      
      $scope.books = defaultBooks;
				
			}
			
			
	else{
		defaultBooks = JSON.parse(localStorage.Wilkerson_cart);
		$scope.books = defaultBooks;
	}
			
        
   

      $scope.removeBook = function(index) { //removes book
		  defaultBooks.splice(index,1);
		  
		  
		 
     


      }
      
      $scope.addBook = function() {
		  defaultBooks.push({title: "New Book", qty: 1, price: 10.99});
		  
		  
		  return defaultBooks;
		  
     

      }
      
      $scope.saveBooks = function() {
		  window.localStorage.setItem('Wilkerson_cart',JSON.stringify(defaultBooks));
		  
		  return defaultBooks
     

      }
      
      $scope.updateTotal = function() { //Iterate through books and add up prices
          var total = 0;
          angular.forEach($scope.books, function(book){
			  if(book.title){
			      total = + total + (book.price * book.qty);
			      }
			     
			      
			  
		  });
      
     



          return total;
      }
        

    }
);
 