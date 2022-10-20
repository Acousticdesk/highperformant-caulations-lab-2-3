import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from "node:worker_threads";
import { bubbleSort } from "../sorting";

export default function sortArrayInThread(array: number[]): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, {
      workerData: array,
    });
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

if (!isMainThread) {
  parentPort?.postMessage(bubbleSort(workerData));
}
