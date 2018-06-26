//declares functiono
function getClothing(isCold){
	//if statement checks if its true
	if(isCold){
		//statement if isCold is true
		var freezing = "jacket";
	}
	// statement if everything but truthy
	else{
		//declare hot
		var hot = "shorts";
		//undefine because true statement is never ran also block scope
		console.log(freezing);
	}
}
//runs getclothing function with false as the parameter sent
getClothing(false);