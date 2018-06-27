//rejected expected then or catch
Promise.resolve(1)
	//2
	.then(y => y+1)
	//throws error another reject expects then or catch
	.then(y => {
		throw new Error("Error");
	})
	//catchs error with a promise
	.catch(() =>1)
	//2
	.then(y => y+1)
	//console logs 2
	.then(y => console.log(y))
	//catchs any errors which there is not
	.catch(console.error);
//breaks because you aren't suppose to throw error in a async function (NO POINT IN USING A PROMISE IN THIS CASE)
new Promise((resolve,reject)=>{
	throw new Error("error");
}).then(console.log)

new Promise((resolve,reject)=>{
}).catch(console.error)
.then(console.log)