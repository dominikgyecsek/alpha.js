function capitalize(str, count) {
	
	if (count === undefined) {

		return str.charAt(0).toUpperCase() + str.slice(1);
		
	} else {
		
		strLen = str.length;
		
		if (count < strLen) strLen = count;
		
		var newStr = ""
		
		for (var i = 0; i < strLen; i++) {
			newStr += str.charAt(i).toUpperCase();
		}
		
		newStr += str.slice(newStr.length, str.length);
		
		return newStr;
		
	}
	
}