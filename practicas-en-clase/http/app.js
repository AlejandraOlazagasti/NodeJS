const { response, request } = require('express');
const express = require('express');

const app = express();

/* 
HTTP Tiene: 
-verbos:
    GET
    POST
    PUT
    PATCH
    DELETE 
-status: hay una página llamada http.cat que contiene los nombres de todos los errores
    100 respuestas informativas
    200 respuestas exitosas, status exitoso
    300
    400 errores que comete el usuario al hacer peticiones
    500
-headers:
 
*/

// aquí el request es lo que se requiere para el response, nosotros definimos cómo obtener el request y qué le vamos a responder, con qué status con ".status" y qué le enviaremos fisicamente con ".send"
/*app.get('/', (req, res) => {
  req.method
  res.status(200).send('<h1>Hola!</h1>')
}) */

// aquí el request es lo que se requiere para el response, nosotros definimos cómo obtener el request y qué le vamos a responder, con qué status con ".status" y qué le enviaremos, los back no usamos el ".send" normalmente usamos ".json":

/*app.get('/', (req, res) => {
  req.method
  res.status(200).json({message: 'Hola mundo'})
})*/

/* IMPORTANTE: El navegador sólo acepta peticiones tipo GET, para hacer otro tipo de peticiones el profe utiliza Thunder Client*/
app.post('/', (req, res) => {
  res.status(200).json({
    message: 'Haciendo petición tipo post',
    verb: req.method
  })
})
app.put('/', (req, res) => {
  res.status(200).json({
    message: 'Haciendo petición tipo put',
    verb: req.method
  })
})

// definir dónde vamos a escuchar y el call back, hay más de 35mil puertos disponibles que podemos usar en listen
app.listen(8000, () => {
  console.log('Server started at port 8000')
})