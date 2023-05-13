angular.module('myApp', [])
.controller('CartControler', function ($scope) {
	
	var list_storage = []; //Stores each snapshot of the book store
	var counter = 0; //Keep track of which book list index one is on
	var defaultBooks;  //Variable tat holds the books 
	var list = []; //List that holds the list of books after parsing from JSON
	window.localStorage.removeItem('Wilkerson_list'); //Delete any local storage from list containing store snapshots
	

	
	if (localStorage.getItem("Wilkerson_cart") == null){
		  defaultBooks = [
        {title: 'Absolute Java', qty: 1, price: 114.95},
        {title: 'Pro HTML5',     qty: 2, price: 27.95},
        {title: 'Head First HTML5', qty: 1, price: 27.89}
      ];
      
      
      
      $scope.books = {j:g,f:p,h:o, defaultBooks};
	  
      
      books.defaultBooks
      
 	
			}
			
			
	else{
		defaultBooks = JSON.parse(localStorage.Wilkerson_cart);
		$scope.books = defaultBooks;
		
	
		
	}
	
	

      $scope.removeBook = function(index) {
		  
		   if(list_storage.length > counter){
			  list_storage.length = counter; 
		  }
		  
		  var data_list = []; //Holds the elements to make a list of list
		  
		   angular.forEach($scope.books, function(book){ //Iterate through each book
			  var elements = {title: book.title, qty: book.qty, price:book.price}
			  data_list.push(elements);
		  });
		  
		  list_storage.push(data_list);
		  window.localStorage.setItem('Wilkerson_list',JSON.stringify(list_storage)); //Store list of list inside the local storage
		  
		  counter++;
		  
		  defaultBooks.splice(index,1); //remove book at this index

      }
      
      
      $scope.redo = function() {
		  if(counter < list_storage.length && counter >= 0){ 
			  
			   var data_list = [];
		  
		   angular.forEach($scope.books, function(book){
			  var elements = {title: book.title, qty: book.qty, price:book.price}
			  data_list.push(elements);
		  });
		  
		  list_storage.push(data_list);
		  window.localStorage.setItem('Wilkerson_list',JSON.stringify(list_storage));
			  
			  
			  
			  
			  counter++; //Increase pointer when a snapshot of the book stroe is added to list_storage
			  list = JSON.parse(localStorage.Wilkerson_list);
			  defaultBooks = list[counter]; //Return the newest ist of books
			  $scope.books = defaultBooks;
			  
			  
			  
			  
		  }
		  
		  else{
			  console.log("Cannot Redo again")  
		  }
		  
		  
	  }
	  
	  $scope.undo = function(){
		  if(counter >= 0){
			  
			   var data_list = [];
		  
		   angular.forEach($scope.books, function(book){
			  var elements = {title: book.title, qty: book.qty, price:book.price}
			  data_list.push(elements);
		  });
		  
		  list_storage.push(data_list);
		  window.localStorage.setItem('Wilkerson_list',JSON.stringify(list_storage));
			  
			  
			  
			 counter--;//Have counter go to previous store snapshot in list
			 list = JSON.parse(localStorage.Wilkerson_list);
			 defaultBooks = list[counter];
			 $scope.books = defaultBooks;
			 
			 
			 
			  
			  
		  }
		  
		  else{
			  console.log("Cannot undo again")  
		  }
		  
		  
	  }
      
      $scope.addBook = function() { //Add the book to store
		  if(list_storage.length > counter){
			  list_storage.length = counter;  //If the list length is greater than counter delete all the elements greater than the counter
			  //As we no longer need those snapshots of the store because the new book store added is now the top of list. Redos are no longer allowed 
		  } 
		   
		     
		  var data_list = [];
		   angular.forEach($scope.books, function(book){
			  var elements = {title: book.title, qty: book.qty, price:book.price}
			  data_list.push(elements);
		  }); 
		  
		  list_storage.push(data_list);
		  
		   window.localStorage.setItem('Wilkerson_list',JSON.stringify(list_storage));
		   
		   counter++; 	      
		  

		
		  defaultBooks.push({title: "New Book", qty: 1, price: 10.99});
		  
		  
		  return defaultBooks;
		  
     

      }
      
      
      $scope.saveBooks = function() {
		  window.localStorage.setItem('Wilkerson_cart',JSON.stringify(defaultBooks));
		  
		  return defaultBooks
     

      }
      
      $scope.updateTotal = function() { //Iterate throuh list and add prices
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
 