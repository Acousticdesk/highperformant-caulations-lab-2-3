import * as express from 'express'
import getRandomIntInRange from '../numbers';
import { bubbleSort } from '../sorting';
const router = express.Router();

router.get('/', function(req, res) {
  const LENGTH = 100;
  const array = Array.from({ length: LENGTH }, () => getRandomIntInRange(0, LENGTH - 1));
  const sortedArray = bubbleSort(array);

  res.json({ status: 200, length: sortedArray.length + 1, body: sortedArray });
});

export default router;
