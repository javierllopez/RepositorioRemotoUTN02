var express = require('express');
var router = express.Router();

/* GET productos. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

module.exports = router;