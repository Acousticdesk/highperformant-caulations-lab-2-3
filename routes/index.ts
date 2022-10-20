import * as express from "express";
import getRandomIntInRange from "../numbers";
import sortArrayInThread from "../sorting/sortArrayInThread";
const router = express.Router();

router.get("/", async function (req, res) {
  const { length = 100 } = req.query;
  const arrayLength = Number(length);
  const array = Array.from({ length: arrayLength }, () =>
    getRandomIntInRange(0, arrayLength - 1)
  );
  const sortedArray = await sortArrayInThread(array);
  res.status(200);
  res.json({ length: sortedArray.length, body: sortedArray });
});

export default router;
