var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contactos. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

router.post('/', async (req, res, next) => {

var nombre = req.body.nombre;
var apellido = req.body.apellido;
var email = req.body.correo;
var telefono = req.body.telefono;
var comentarios = req.body.comentarios;


//console.log(req.body);

var obj = {
  to: "javier_l@yahoo.com",
  subject: 'Contacto desde la web',
  html: nombre + " "+ apellido + " se contactó a través del sitio web. "+"<br> Sus datos son los siguientes:<br>"+ "correo electrónico: " + email + "<br>" + "teléfono: " + telefono + "<br>" + "Comentarios: <br>" + "<p>" + comentarios + "<p>"
}


var transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})


var info = transporter.sendMail(obj);

res.render('contacto', {
  message: "Mensaje enviado con exito"
});

}); //cierro POST

module.exports = router;