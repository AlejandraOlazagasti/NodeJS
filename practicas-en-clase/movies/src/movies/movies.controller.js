const uuid = require('uuid')
const Movies = require('../models/movies.models')

const getAllMovies = async () => {
  //traer todas las peliculas hace referencia a Select * from movies
  const data = await Movies.findAll()
  return data
}

getAllMovies()
   .then((response) => console.log(response))
   .catch((err) => console.log(err))

const createMovie = async (data) => {
  //esta función hace referencia a sql cuando realizabamos "insert into movies (id, name, genre, duration, releaseData) values (uuid.v4(), data.name, data.genre, data.duration, data.releaseData)"
  const newMovie = await Movies.create({
    id: uuid.v4(),
    name: data.name,
    genre: data.genre,
    duration: data.duration,
    releaseDate: data.releaseDate
  })
  return newMovie;
}

//así la ejecutaríamos
createMovie({
  name: 'Pacific Rim',
  genre: 'Action, SciFi',
  duration: 120,
  releaseDate: '2012/10/30'
})
  .then(response => console.log(response))
  .catch(err => console.log(err))

const getMovieById = async (id) => {
  //esta constante es igual a hacer en sql "Select * from movies where id = id"
  const data = await Movies.findOne({
    where: {
      id: id
    }
  })
  return data
}

// module.exports = {
//   createMovie
// }