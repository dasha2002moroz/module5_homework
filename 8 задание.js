let fruits = new Map();

fruits.set("apple", "green");
fruits.set("strawberry", "red");
fruits.set("blueberry", "blue");


fruits.forEach(function(value,key) {
  console.log('Ключ — ' + key +', значение — ' + value);
});