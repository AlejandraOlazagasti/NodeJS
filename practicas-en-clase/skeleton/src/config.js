//? Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, Testing, Produccion
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || '123456',
        dbName: process.env.DB_NAME
    }

}

module.exports = config

