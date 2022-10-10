const uuid = require('uuid')
const Movies = require('../models/movies.models')

const getAllMovies = async () => {
  //traer todas las peliculas hace referencia a Select * from movies
  const data = await Movies.findAll()
  return data
}

//Así se ejecutaría función getAllMovies
/*getAllMovies()
   .then((response) => console.log(response))
   .catch((err) => console.log(err))*/

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

//así ejecutaríamos createMovie
/*createMovie({
  name: 'Pacific Rim',
  genre: 'Action, SciFi',
  duration: 120,
  releaseDate: '2012/10/30'
})
  .then(response => console.log(response))
  .catch(err => console.log(err))*/

const getMovieById = async (id) => {
  //esta constante es igual a hacer en sql "Select * from movies where id = id"
  const data = await Movies.findOne({
    where: {
      id: id
    }
  })
  return data
}

//así ejecutaríamos getMovieById
/*getMovieById('8d8d45e6-a25a-4497-828b-c4f3c8183cab')
  .then((response) => console.log(response))
  .catch((err) => console.log(err))*/

const editMovie = async (id, data) => {
  const response = await Movies.update(data, {
    where: {
      id: id,
    },
  });
  return response;//? Si el where no encuentra nada, retorna null
};

//así ejecutaríamos editMovie
/*editMovie("15f8484b-d040-4283-911f-7e1361ec7a99", {
  duration: 130,
  name:"Hola"
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
   console.log(err);
  });*/

const deleteMovie = async (id) => {
  const data = await Movies.destroy({
      where: {
          id: id
      }
  })
  return data
}


module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  editMovie,
  deleteMovie
};