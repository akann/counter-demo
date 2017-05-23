
import express from 'express';

const router = express.Router();

export default router;

router.get('/', (request, response) => {
  response.status(301).redirect('/demo');
});
