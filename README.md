# Alpha.js

Alpha.js is a JavaScript library, that takes the pain out of array, string and number operations.

## Array


### Array.fill (value, startIndex, endIndex)
fills the array with a given value

```sh
var arr = [];
arr.fill("Foo Bar", 0, 5);
// arr = ["Foo Bar", "Foo Bar", "Foo Bar", "Foo Bar", "Foo Bar"]
```

### clone (Array)
copies an array by value

```sh
var arr = ["Foo", "Bar"];
var arr2 = clone(arr);
// arr2 = ["Foo", "Bar"]
```

### Array.remove(startIndex, endIndex, endsWithIndex)
removes varriables from array

```sh
var arr = ["Apple", "Orange", "Banana", "Lemon", "Lime"];
arr.remove(2, 2);
// arr = ["Apple", "Orange", "Lime"];

var arr2 = ["Apple", "Orange", "Banana", "Lemon", "Lime"];
arr2.remove(1, 2, true);
// arr2 = ["Apple", "Lemon", "Lime"];
```

### Array.insert(values[String][Array], index)
removes varriables from array

```sh
var arr = ["Apple", "Orange", "Banana", "Lemon", "Lime"];
arr.remove(2, 2);
// arr = ["Apple", "Orange", "Lime"];

var arr2 = ["Apple", "Lime"];
arr2.insert(["Orange", "Banana", "Lemon"], 1);
// arr2 = ["Apple", "Orange", "Lemon", "Lime"];
```

### count([Array] haystack, [String] needle)
counts how many times a value is present in the array

```sh
var arr = ["Apple", "Orange", "Banana", "Lemon", "Lime"];
var no = count(arr, "Apple");
// no = 1
```

### duplicates([Array] haystack, [Bool] includeAll)
counts how many times a value is present in the array

```sh
var arr = ["Apple", "Orange", "Apple", "Apple", "Banana", "Banana", "Lemon", "Lime"];
var arrD = duplicates(arr);
// arrD = ["Apple", "Banana"];

var arr2 = ["Apple", "Orange", "Apple", "Apple", "Banana", "Banana", "Lemon", "Lime"];
var arrD2 = duplicates(arr2, true);
// arrD2 = ["Apple", "Apple", "Banana"];
```

### sum([Array])
returns the sum of an array

```sh
var arr = [12, 421, 12, 53, 93];
var sumOfArr = sum(arr);
// sumOfArr = 591
```

### avg([Array])
returns the avarage of an array

```sh
var arr = [12, 421, 12, 53, 93];
var avgOfArr = avg(arr);
// avgOfArr = 118.2
```

### isIdentical([Array], [Array])
compares two arrays, and return true if they are equal

```sh
var arr = ["Foo", "Bar"];
var arr2 = ["Foo", "Bar"];
var isSame = isIdentical(arr, arr2);
//isSame = true
```

### min([Array])
returns the smallest element in an array

```sh
var arr = [1, 2, 3, 4, 5];
var minOfArr = min(arr);
//minOfArr = 1
```

### max([Array])
returns the biggest element in an array

```sh
var arr = [1, 2, 3, 4, 5];
var maxOfArr = max(arr);
//maxOfArr = 5
```

### mostCommon([Array])
returns the most common element in an array

```sh
var arr = [1, 2, 3, 4, 4, 4, 5];
var mostCommonOfArr = mostCommon(arr);
//mostCommonOfArr = 4
```

### mostCommon([Array])
returns the mode of an array

```sh
var arr = [1, 2, 3, 4, 4, 4, 5];
var modeOfArr = mode(arr);
//modeOfArr = 4
```

### median([Array])
returns the median of an array

```sh
var arr = [1, 2, 3, 3, 4, 4, 4, 5];
var medianOfArr = median(arr);
//medianOfArr = 3.5
```

### Array.getIndex(value, reverse, multiple)
returns the index(es) of a value

```sh
var arr = [1, 2, 3, 3, 4, 4, 4, 5];
var index = arr.getIndex(3);
// index = 2

var arr = [1, 2, 3, 3, 4, 4, 4, 5];
var index = arr.getIndex(4, false, 0);
// index = [4, 5, 6]
```

### Array.replace(old, new, reverse, multiple)
replaces a values in an array

```sh
var arr = [1, 2, 3, 3, 4, 4, 4, 5];
arr.replace(4, 5, false, 0);
// arr = [1, 2, 3, 3, 5, 5, 5, 5]

var arr2 = [1, 2, 3, 3, 4, 4, 4, 5];
arr2.replace(4, 5);
// arr2 = [1, 2, 3, 3, 5, 4, 4, 5]
```

### Array.removeElement(value, reverse, multiple)
removes one or multiple element from an array

```sh
var arr = [1, 2, 3, 3, 4, 4, 4, 5];
arr.removeElement(4, false, 0);
// arr = [1, 2, 3, 3, 5]
```

### Array.sort(numeric)
sort an array with numbers

```sh
var arr = [3, 42, 12, 5, 14];
arr.sort(numeric);
//arr = [3, 5, 12, 14, 42]
```

## String


### capitalize([String]str,  [Int]tillIndex)

```sh
var str = "foo";
str = capitalize(str);
// str = "Foo"
```


## Number

### isInRange([Int]number, [Int]lower, [Int]upper)

```sh
var num = 12;
var inRange = isInRange(num, 0, 20);
// inRange = true
```

### randomInt([Int]min, [Int]max, [Int]steps)
return a random integer

```sh
var randomNum = randomInt(1, 10);
// randomNum = 7

var randomNum2 = randomInt(0, 20, 5);
// randomNum2 = 15
```