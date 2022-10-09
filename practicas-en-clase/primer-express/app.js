// Asi se importa en back
const express = require('express');

const app = express()


// Aquí se define el end point, la ruta donde el front hace la peticion y envia la data 
app.get('/hola', (request, response) => {
  response.json({
    message: 'Hola mundo'
  })
})

// escucha dónde va a recibir las peticiones, en qué puerto y una vez inicializado se ejecuta el call back
app.listen(9000, () => {
  console.log('Server started at port 9000')
})