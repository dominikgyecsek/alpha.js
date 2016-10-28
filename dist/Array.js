Array.prototype.fill = function(fillWith, fillFrom, fillCount) {
	
	if (fillWith === undefined) throw "Fill with is undefined";
	if (fillFrom === undefined) fillFrom = 0;
	if (fillCount === undefined) fillCount = this.length-1;
	
	console.log(fillFrom);
	console.log(fillCount);
	
	for (var i = fillFrom; i < fillFrom + fillCount; i++) {
		this[i] = fillWith;
	}
	
}

function clone(arr) {
	
	return arr.slice(0);
	
}

Array.prototype.remove = function(start, end, endsWithIndex) {
	
	var len = this.length;
	
	if (endsWithIndex === true) end = end - start + 1;
	
	this.splice(start, end);
	
}

Array.prototype.insert = function(values, index) {
	
	if (index === undefined) index = this.length;
	
	if (values.constructor == Array) {
		
		for (var i = 0; i < values.length; i++) {
			
			this.splice(index, 0, values[i]);
			index++;
			
		}
		
	} else if (typeof values === 'object') {
		
		throw "Unsupported data type";
		
	} else {
		
		this.splice(index, 0, values);
		
	}
	
}

function count(arr, val) {
	
	if (val === undefined) return arr.lenght;
	
	var count = 0;
	
	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i] == val) {
			
			count++;
			
		}
		
	}
	
	return count;
	
}

function unique(arr) {
	
	var unique = [];
	
	for (var i = 0; i < arr.length; i++) {
		
		if (unique.indexOf(arr[i]) == -1) {
			unique.push(arr[i]);
		}
		
	}
	
	return unique;
	
}

function duplicates(arr, includeAll) {
	
	var uniques = [];
	var duplicates = [];
	
	for (var i = 0; i < arr.length; i++) {
		
		if (uniques.indexOf(arr[i]) == -1) {
			uniques.push(arr[i]);
		} else {
			duplicates.push(arr[i]);
		}
		
	}
	
	if (includeAll !== true) {
		
		duplicates = unique(duplicates);
		
	}
	
	return duplicates;
	
}

function sum(arr) {
	
	var sum = 0;
	
	for (var i = 0; i < arr.length; i++) {
		
		if (isNaN(arr[i])) throw "Array not only contains numbers";
		
		sum += parseInt(arr[i]);
		
	}
	
	return sum;
	
}

function avg(arr) {

	return sum(arr) / arr.length;
	
}

function isIdentical(arr1, arr2) {
	
	if (arr2.length != arr1.length) return false;
	
	for (var i = 0; i < arr1.length; i++) {
		
		if (arr1[i] != arr2[i]) return false;
		
	}
	
	return true;
	
}

function min(arr, nth) {
	
	var min = arr[0];
	
	if (nth === undefined) {
		
		for (var i = 1; i < arr.length; i++) {
			
			if (min > arr[i]) min = arr[i];
			
		}
		
		return min;
		
	} else {
		
		nth -= 1;
		
		var uniques = unique(arr);
		var duplication = [];
		duplication.fill(0, 0, uniques.length);
		uniques.sort(numeric);
		
		for (var i = 1; i < uniques.length; i++) {
			duplication[i] = count(arr, uniques[i]);
		}
		
		if (nth > uniques.length-1) nth = uniques.length-1;
		
		return uniques[nth];
		// Sort with count
		
	}	
	
}

function max(arr, nth) {
	
	var max = arr[0];
	
	if (nth === undefined) {
		
		for (var i = 1; i < arr.length; i++) {
			
			if (max < arr[i]) max = arr[i];
			
		}
		
	}
	
	return max;
	
}

function mostCommon(arr, nth) {
	
	if (nth === undefined) {
		
		arr.sort(numeric);
		var currentDuplicationCount = 1;
		var maxDuplicationCount = 1;
		var maxDuplicationNumber;
		var maxDuplicationNumber = arr[0];
		
		for (var i = 1; i < arr.length; i++) {
			
			if (isNaN(arr[i])) throw "Array not only contains numbers";
			
			if (arr[i] == arr[i-1]) {
				
				currentDuplicationCount++
			
			} else {
				
				if (currentDuplicationCount > maxDuplicationCount) {
					
					maxDuplicationCount = currentDuplicationCount;
					maxDuplicationNumber = arr[i-1];
					
				}
				
				currentDuplicationCount = 1;
				
			}
			
		}
		
		return maxDuplicationNumber;		
		
	}
	
}

function mode(arr) {
	
	return mostCommon(arr);
	
}

function median(arr) {
	
	arr.sort(numeric);
	var len = arr.length;
	
	if ( len % 2 == 0 ) {
		return (arr[len/2+1] + arr[len/2]) / 2;
	} else {
		return arr[Math.floor(len/2)];
	}
	
}

Array.prototype.getIndex = function(val, reverse, multiple) {
	
	var start, end, limit, changeCount = 0, isFinished = false;
	
	if (reverse === undefined) {
		start = 0;
		end = this.length;
	} else {
		start = this.length;
		end = 0;		
	}
	
	if (multiple === undefined) {
		limit = 1;
	} else if (multiple === 0) {
		limit = this.length;
	} else {
		limit = multiple;
	}
	
	var i = start;
	var indexes = [];
	
	do {
		
		if (reverse === undefined) {
			i++;
			if (i > end-1) isFinished = true;
		} else {
			i--;
			if (i < end+1) isFinished = true;
		}
		
		if (this[i] == val) {
			changeCount++;
			indexes.push(i);
		}
		
	} while ( (changeCount < limit) && (!isFinished) );
	
	return indexes;
	
}

Array.prototype.replace = function(originalVal, replaceWith, reverse, multiple) {
	
	var indexes = this.getIndex(originalVal, reverse, multiple)
	console.log(indexes);
	
	for (var i = 0; i < indexes.length; i++) {
		var index = indexes[i];
		this[index] = replaceWith;
	}
	
}

Array.prototype.removeElement = function(val, reverse, multiple) {
	
	var indexes = this.getIndex(val, reverse, multiple);
	
	for (var i = 0; i < indexes.length; i++) {
		var index = indexes[i];
		console.log(index);
		console.log(indexes);
		if (reverse === undefined) this.splice(index+i, 1);
		else this.splice(index, 1);
	}
	
}