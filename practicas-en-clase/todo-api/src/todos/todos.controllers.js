//Aquí se van a colocar todas las acciones que piden hacerse dependiendo cada ruta
const uuid = require('uuid');

const todoDB = [{
  id: '25d06082-db75-40ad-978a-6129d1daf630',
  title: 'Este es un titulo',
  is_completed: false
},
{
  id: '97c3f37f-32fc-42f4-8221-d66755d58640',
  title: 'Este es otro titulo',
  is_completed: false
},
]

const getAllTodos = () => {
  return todoDB
}

const getTodoById = (id) => {
  const data = todoDB.find(todo => todo.id === id)
  return data
}

const createTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    is_completed: false
  }
  todoDB.push(newTodo)
  return newTodo
}

//para exportarlo existen varios metodos, uasaremos el más común

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo
}
