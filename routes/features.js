const express = require('express');
const router = express.Router();

/* GET features page. */
router.get('/', function(req, res, next) {
  res.render('features', { title: 'Choose features' });
});

module.exports = router;
