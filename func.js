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
		// console.log(freezing);
	}
}
//runs getclothing function with false as the parameter sent
getClothing(false);


//a way to avoid this:
function getClothing2(isCold){
	//let works like most variable declaration in other languages where it limits it to block scope as opposed to  var which is global.
	let freezing = "jacket"
	if(isCold){

	}else{
		let freezing = "shorts"
		//console logs shorts
		console.log(freezing);
	}
}
getClothing2(false);