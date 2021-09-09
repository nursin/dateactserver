const express = require('express');
const router = express.Router();

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Create character form' });
});

module.exports = router;
