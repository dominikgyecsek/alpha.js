function numeric(a, b) {
	return a-b;
}

function isInRange(num, lower, upper) {
	
	if (num === undefined) throw "Number is undefined";
	
	if ( (lower !== undefined) && (upper !== undefined) ) {
		
		if ( (num > (lower -1 ) ) && (num < (upper + 1)) ) return true;
		else return false;
		
	} else {
		
		throw "Range is undefined";
		
	}
	
}

function randomInt(min, max, steps) {
	
	if (steps === undefined) {
		
		return Math.floor( ( Math.random() * max - min + 1) + min );
		
	} else {
		
		var range = [];
		
		for (var i = min; i < max; i+=steps) {
			range.push(i);
		}
		
		return range[Math.floor( ( Math.random() * range.length ) )];
		
	}
	
}