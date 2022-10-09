const express = require('express');

const app = express()

/*se van a utilizar 3 tipos de archivos:
  rutas: reciben paths y verbos http
  controladores: reciben la lógica y acciones referentes a la base de datos
  servicios: recibe tdo lo relacionado al req y res
*/



// esto nos permite recibir o habilitar informacion que viene de un json como acceder a req.body
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server OK',
  })
})

const database = [{
  id: 1,
  title: 'Este es un titulo',
  is_completed: false
},
{
  id: 2,
  title: 'Este es otro titulo',
  is_completed: false
},
]

app.get('/todos', (req, res) => {
  res.status(200).json(database)
})
// para obtener la información del request desde la url se utiliza "params" con el punto defines el dato especifico de la url, si tienes varios datos puedes usar destructuring // para que funcione el filter se debe modificar el tipo de dato recibido en el req por "Number"
app.get('/todos/:id', (req, res) => {
  const id = Number(req.params.id)
  
  // para obtener el dato especifico que necesitemos se hace un filter 
  const data = database.filter(todo => todo.id === id)

  //se puede usar condicionar para detectar errores, por ejemplo para detectar que no existe esa url se hace lo siguiente
  if(data.length !== 0){
    res.status(200).json({my_id: id, data: data[0]})
  } else {
    res.status(404).json({message: 'Invalid ID'})
  }
})
app.post('/todos', (req, res) => {
  // para saber dónde está la información ingresada por el usuario se debe leer el request, parte de body, pero puedes poner punto para elegir la siguiente info y ser más especifico
  //const todo = req.body
  // aquí se hace el push de lo que se haya ingresado en el request y se obtiene desde la constante todo y se toma el valos con el punto y dato
  /*database.push({
    id: todo.id,
    title: todo.title,
    is_completed: false
  })*/
  // También se puede hacer con destructuring, para tener más clara la info 
  const {id, title} = req.body

  //para el manejo de errores se utiliza una condicional, con los valores truty(true, string, número q no sea cero, un array y un objeto) y falsy(false, null, undefined, string vacio, 0, NaN)
  if(
    !id || !title
  ){
    res.status(400).json({
      message: 'Missing Data'
    })
  } else {
    // el push será diferente por el destructuring, y sólo se detonará si cumple con el condicional
    database.push({
      id,
      title,
      is_completed: false
    })
  }
  // se puede hacer el push directamente entre los parentesis del json 
  res.status(200).json(
    // {
    // id: 3,
    // title: 'Este es el tercer titulo',
    // is_completed: false,
    // ip: req.ip,
    // verb: req.method
    // }
    database
  )
})

app.listen(9000, () => {
  console.log('Server started at port 8000')
})

//modelos, vistas y controladores (MVC), se utilizan para la arquitectura del back. Los modelos son las bases de datos pero separados por tablas, los controladores es el manejo de la lógica para pedir esos datos y las vistas es el resultado que arrojan los controladores de los modelos, puede ser con errores o peticiones exitosas