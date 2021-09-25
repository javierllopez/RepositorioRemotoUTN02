var express = require('express');
var router = express.Router();

/* Ingresar */
router.post('/', function(req, res, next) {
    if(req.body.nombre) {
        req.session.nombre = req.body.nombre;
    }
    res.redirect('/');
});

module.exports = router;
