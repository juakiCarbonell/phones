const { Router } = require('express');
const router = Router();

const phones = require('../../phones.json');

router.get('/phones', (req, res) => {
  res.json(phones)
})

module.exports = router;