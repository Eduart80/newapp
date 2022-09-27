import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: [2,3,4] });
});

export default router;
