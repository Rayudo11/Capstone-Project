const mysql = require('mysql')

require('dotenv').config();

// console.log(DB_HOST,DB_USER,DB_DATABASE,DB_PORT,DB_PASSWORD)

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port:process.env.DB_PORT
      })

      return this.pool
    }

    return this.pool
  }
}

const instance = new Connection()

module.exports = instance;