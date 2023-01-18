

export function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
  
        if (arr[j] > arr[j + 1]) {
          let tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        }
      }
    }
    return arr;
}

export const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let middle = Math.floor((start + end) / 2);
      if (value === arr[middle] ) return middle;
      if (value < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return -1;
};

let arr = [1,2,3,6,8,1,6,3,2,1,0,4];
let arr2 = ['one', 'two','three'];
let arrsort = bubbleSort(arr);



console.log (arrsort)
let cortisol = [...arrsort, ...arr2];
console.log (cortisol)