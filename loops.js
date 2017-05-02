function forLoop(array) {
for (let i = 0; i < 25; i++) {
	if (array[i] === 1) {
	array.push("I am 1 strange loop");
} else {
	array.push(`I am ${array[i]} strange loops.`);
}
} return array;
}

function whileLoop(number) {
	while (number > 0) {
		console.log(number--);
	} return 'done';
}


function doWhileLoop(array) {
	function maybeTrue() {
	  return Math.random() >= 0.5
	}

	do {
		return array.splice(0,1);
	} while (array.length > 0 && (maybeTrue()));
}
