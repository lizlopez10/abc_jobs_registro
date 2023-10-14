const { error } = require('console');
var logica = require ('../logic/registro.logic')

var express = require('express');

var router = express.Router();
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    nombre_completo: Joi.string().min(3).max(200).required(),
    email: Joi.string().min(6).max(200).required().email(),
    contrasena: Joi.string().min(6).max(1024).required(),
    id_tipo_usuario: Joi.number().required(),
})

const schemaLogin = Joi.object({
  email: Joi.string().min(6).max(200).required().email(),
  contrasena: Joi.string().min(6).max(1024).required(),
})

/* POST Iniciar registro*/
router.post('/usuario', async function(req, res) {
  const { error } = schemaRegister.validate(req.body)
  if (error) {
    return res.status(400).json(
        {error: error.details[0].message}
    )
  }
  const { nombre_completo, email, contrasena, id_tipo_usuario } = req.body
  try {
    var result = await logica.registroUsuario(nombre_completo, email, contrasena, id_tipo_usuario);
    res.status(201).send('successful!')
  } catch (error) {
    return res.status(400).json(error);
  }
  
});

/* POST Iniciar registro*/
router.post('/login', async function(req, res) {
  const { error } = schemaLogin.validate(req.body)
  if (error) {
    return res.status(400).json(
        {error: error.details[0].message}
    )
  }
  try {
    const { email, contrasena } = req.body
    var result = await logica.loginUsuario(email, contrasena);
    res.json(result)
  } catch (error) {
    return res.status(400).json(error);
  }
  
});

module.exports = router;


