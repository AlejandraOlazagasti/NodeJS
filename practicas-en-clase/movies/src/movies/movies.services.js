const moviesControllers = require("./movies.controller");

const getAllMovies = (req, res) => {
  moviesControllers.getAllMovies()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const postMovie = (req, res) => {
  const data = req.body;
  if (data.name && data.genre && data.duration && data.releaseDate) {
    moviesControllers.createMovie(data)
      .then(response => {
          res.status(201).json(response)
      })
      .catch(err => {
          res.status(400).json({message : err.message})
      })  
  } else {
    res.status(400).json({message : 'Missing data'})
  }
};

const getMovieById = (req, res) => {
  const id = req.params.id;

  moviesControllers.getMovieById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else {
        res.status(404).json({message: 'Invalid ID'})
      }
    })
    .catch(err => {
        res.status(404).json({message: err.message})
    })
}
//? Modificacion parcial
const patchMovie = (req, res) => {
  const id = req.params.id 
  const {name, genre, duration, releaseDate} = req.body;

  moviesControllers.editMovie(id, {name, genre, duration, releaseDate})
    .then((response) => {
      //? [0]
      if(response[0]){
        res.status(200).json({
          message: `Movie with id: ${id}, edited succesfully!`
        })
      } else {
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(error => {
      res.status(400).json({message: error.message})
    })
}


//? youtube.com/videos/57
//? youtube.com/videos/:video_id/comments/:comment_id
//? const {video_id, comment_id} = req.params


const deleteMovie = (req, res) => {
  const id = req.params.id
  moviesControllers.deleteMovie(id)
    .then((response) => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({message: 'Invalid ID'})
      }
    })
    .catch(err=> {
      res.status(400).json(err)
    })
}

module.exports = {
  getAllMovies,
  getMovieById,
  postMovie,
  patchMovie,
  deleteMovie
}