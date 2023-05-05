const arr = [1, 1, 2, 1, 1, 0];
let even = 0;
let odd = 0;
let zero = 0;

for(let i = 0; i < arr.length; ++i){
  if(arr[i] % 2 == 0 && arr[i] != 0){
    ++even;
  }
  else if(arr[i] % 2 == 1){
    ++odd;
  }
  else if(arr[i] == 0){
    ++zero;
  }
}
console.log('В данном массиве ' + even + ' четных чисел');
console.log('В данном массиве ' + odd + ' нечетных чисел');
console.log('В данном массиве ' + zero + ' нулей');