import * as express from "express";
import getRandomIntInRange from "../numbers";
import sortArrayInThread from "../sorting/sortArrayInThread";
import { Request } from "express";
const router = express.Router();

interface RootRouteQueryParams {
  n: number;
  minValue: number;
  maxValue: number;
  sortingOrder: "asc" | "desc";
}

router.get(
  "/",
  async function (req: Request<{}, {}, {}, RootRouteQueryParams>, res) {
    const { n = 100, minValue = 0, sortingOrder = "asc" } = req.query;
    const { maxValue = n } = req.query;
    const array = Array.from({ length: Number(n) }, () =>
      getRandomIntInRange(Number(minValue), Number(maxValue))
    );
    const sortedArray = await sortArrayInThread(array, sortingOrder);
    res.status(200);
    res.json({ length: sortedArray.length, body: sortedArray });
  }
);

export default router;
