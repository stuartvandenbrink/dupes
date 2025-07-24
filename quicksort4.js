function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
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

console.log("hey");
let up = "down";
let left = "right";
