const { getAllTodos, getTodoById, createTodo} = require('./todos.controllers');

const getTodos = (req, res) => {
  const data = getAllTodos()
  res.status(200).json(data)
}
const getOneTodo = (req, res) => {
  const id = req.params.id
  const data = getTodoById(id)
  if(data){
    res.status(200).json(data)
  } else {
    res.status(404).json({id: id, message: 'Invalid ID'})
  }
}
const createNewTodo = (req, res) => {
  const {title} = req.body

  if(title){
    const data = createTodo(title)
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Missing Data'})
  }

}

module.exports = {
  getTodos,
  getOneTodo,
  createNewTodo
}