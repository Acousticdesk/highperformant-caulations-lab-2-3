import * as express from 'express'
import getRandomIntInRange from '../numbers';
import { bubbleSort } from '../sorting';
const router = express.Router();

router.get('/', function(req, res) {
  const { length = 100 } = req.query;
  const arrayLength = Number(length);
  const array = Array.from({ length: arrayLength }, () => getRandomIntInRange(0, arrayLength - 1));
  const sortedArray = bubbleSort(array);

  res.status(200);
  res.json({ length: sortedArray.length, body: sortedArray });
});

export default router;
