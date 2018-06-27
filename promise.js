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
