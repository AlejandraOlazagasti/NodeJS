// todos [POST, GET]
// todos:id [GET]


//se puede hacer en dos líneas
/* const express = require('express')
const router =express.Router() */
//se puede hacer en destructuring
/* const {Router} = require('express') */

//Y se puede hacer en una línea, que es la que yo usaré
const router = require('express').Router()

const todoServices = require('./todos.services')

router.get('/todos', todoServices.getTodos)
router.get('/todos/:id', todoServices.getOneTodo)
router.post('/todos', todoServices.createNewTodo)

module.exports = router