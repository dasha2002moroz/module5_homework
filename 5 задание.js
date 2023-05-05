const arr = [1, 2, 3, 4, 8];

console.log(arr.length);
let result = arr.map(function(item, index, arr){
  console.log(item, index);
});