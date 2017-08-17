$(document).ready(function(){

	// an array with all of the items in the drop down menu
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"] 

	// a for each loop to add each of the array elements in the drop down menu
	cities.forEach(function(element){
		console.log(element);
		$("select").append("<option>" + element + "</option>")
	})

	// change the background css to the css class value of the (update) function
	$("#city-type").change(update);

	// capture the value the user selects in the drop down 
	// match the value with the associated css class type	
	function update() {
		var city = $("#city-type").val();

		if (city == "ATX"){
			$("body").attr("class", "austin");
		} else if (city == "LA"){
			$("body").attr("class", "la");
		} else if (city == "NYC"){
		 	$("body").attr("class", "nyc");		  
		} else if (city == "SF"){
			$("body").attr("class", "sf");
		} else if (city == "SYD"){
			$("body").attr("class", "sydney");			
		} else {	// this one is not working						
			$("body").attr("class", "body"); 
		}
	};

});