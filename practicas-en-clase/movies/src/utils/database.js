const { Sequelize } = require('sequelize')

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '123456',
  database: 'movies_crud',
})

module.exports = db