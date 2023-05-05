const arr = [1, 1, 1, 1, 1, 1];
let count = 1;

for(let i = 0; i < arr.length - 1; ++i){
  if(arr[i] == arr[i + 1]){
    ++count;
  }
}
if(count == arr.length){
  console.log('true')
}
else{
  console.log('false')
}