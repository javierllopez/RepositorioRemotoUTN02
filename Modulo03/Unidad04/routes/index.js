var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
  var conocido = Boolean(req.session.nombre);

  res.render('index', { 
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre 
  });
});

module.exports = router;
