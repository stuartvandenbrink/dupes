function quickSort(arr) {

  console.log("Here's some stuff near the beginning of the file");
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let el of arr) {
    if (el < pivot) {
      left.push(el);
    } else if (el > pivot) {
      right.push(el);
    } else {
      equal.push(el);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
}

console.log(quickSort([3, 6, 8, 10, 1, 2, 1]));

let message = "Here's some other stuff at the end of the file";
console.log("Woo");
console.log("Hah");
console.log("Yup");
console.log("Yeah");
