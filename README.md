
Alpha.js is a javascript library that makes it easier to use certain kind of operations

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

