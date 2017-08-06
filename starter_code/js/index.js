$(document).ready(function(){

	$("form").submit(main);

	function main (){
		var city = cityInput();
		event.preventDefault();
		backgroundImage(city);
	}
	// console.log(city);

	function cityInput(){
// user inputs city into #city-type field + click #submit-btn OR hits return === .submit()		
		return $("#city-type").val();		
	}

	function backgroundImage(city){
// 	if: 
//		"Austin" || "ATX" >>> bg img is austin.jpg	
// 		"Los Angeles" || "LA" || "LAX" >>> la.jpg
//		"New York" || "New York City" || "NYC" >>> bg img is nyc.jpg
//		"San Francisco" || "SF" || "Bay Area" >>> bg img is sf.jpg
// 		"Sydney" || "SYD" >>> bg img is sydney.jpg
// 	else 
// 		bg img is citipix_skyline.jpg
		if (city == "Austin" || city == "ATX"){
			$("body").attr("class", "austin");
		} 
		else if (city == "Los Angeles" || city == "LA" || city == "LAX"){
			$("body").attr("class", "la");
		} 
		else if (city == "New York" || city == "New York City" || city == "NYC"){
		 	$("body").attr("class", "nyc");		  
		} 
		else if (city == "San Francisco" || city == "SF" || city == "Bay Area"){
			$("body").attr("class", "sf");
		} 
		else if (city == "Sydney" || city == "SYD"){
			$("body").attr("class", "sydney");			
		} 
		else {
			$("body").css("body", "background");
		}
	}	

})