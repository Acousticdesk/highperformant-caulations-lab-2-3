import createDebug from "debug";

const debug = createDebug("lab-2-3:server");

export function bubbleSort(arr: number[], sortingOrder: "asc" | "desc") {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (i === arr.length - 1 || j === arr.length || i === j) {
        continue;
      }

      const condition =
        sortingOrder === "asc" ? arr[j + 1] < arr[j] : arr[j + 1] > arr[j];

      if (condition) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}
