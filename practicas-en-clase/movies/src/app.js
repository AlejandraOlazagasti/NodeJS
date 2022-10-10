const express = require('express');

//Importación de db
const db = require('./utils/database')

//Importación de las relaciones entremodelos 
const initModels = require('./models/initModels')

const app = express()

//variable global (importación)
const config = require('./config')

//Importación de las rutas
const moviesRouter = require('./movies/movies.router')

//verifica si la conexión con la base de datos fue o no exitosa
db.authenticate()
  .then(() => console.log('DB Authentication Succesfully'))
  .catch((err) => console.log(err))

//verifica si la sincronización de la base de datos fue o no exitosa
db.sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err))

initModels()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'OK!'})
})

app.use('/movies', moviesRouter)

app.listen(config.port, () => {
  console.log(`Server started at port ${config.port}`)
})