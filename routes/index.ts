import * as express from 'express'
import getRandomIntInRange from '../numbers';
import { bubbleSort } from '../sorting';
const router = express.Router();

router.get('/', function(req, res) {
  const LENGTH = 100_000;
  const array = Array.from({ length: LENGTH }, () => getRandomIntInRange(0, LENGTH - 1));

  res.json({ status: 200, body: bubbleSort(array) });
});

export default router;
