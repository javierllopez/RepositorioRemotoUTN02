var express = require('express');
var router = express.Router();

/* Salir */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;