export function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === arr.length - 1 || j === arr.length || i === j) {
        continue;
      }

      if (arr[j + 1] > arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}
