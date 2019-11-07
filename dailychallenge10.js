var i = 99 
var j = 0
for(i= 99; i>1; i-=j){
	j += 1 
	console.log(i + " bottles of beer on the wall")
	console.log(i + " bottles of beer")
	if (j <= 1){
		console.log("Take " + j + " down, pass it around")
	}
	else{
		console.log("Take " + j + " down, pass them around")
	}
	if (i-j > 0){
		console.log((i-j) + " bottles of beer on the wall")
	}
	else{
		break
	}
	
}

