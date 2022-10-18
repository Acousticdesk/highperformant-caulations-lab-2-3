import * as express from 'express'
const router = express.Router();

router.get('/', function(req, res) {
  res.json({ status: 200 });
});

export default router;
