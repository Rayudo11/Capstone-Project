const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllClients = (req, res) => {
  console.log('hello')
    pool.query("SELECT * FROM clients", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
}

// const getClientById = (req, res) => {
//     let sql = "SELECT * FROM users WHERE id = ?"
//     sql = mysql.format(sql, [req.params.id])
//     pool.query(sql, (err, rows) => {
//       if (err) return handleSQLError(res, err)
//       return res.json(rows);
//     })
// }

// const createClient = (req, res) => {
//     let sql = `
//     INSERT INTO users(first_name, last_name)
//     VALUES (?,?)
//     `
//     sql = mysql.format(sql, [req.body.first_name,req.body.last_name])
//     pool.query(sql, (err, results) => {
//       if (err) return handleSQLError(res, err)
//       return res.json({ newId: results.insertId });
//     })
// }

// const updateClientById = (req, res) => {
//     let sql = `
//     UPDATE users SET first_name = ?, last_name = ? WHERE (id = ?);
//     `
//     const {first_name, last_name} = req.body
//     const {id} = req.params
//     sql = mysql.format(sql, [first_name, last_name, id])
//     pool.query(sql, (err, results) => {
//       if (err) return handleSQLError(res, err)
//       return res.status(204).json();
//     })
// }

// const deleteClientByName = (req, res) => {
//     let sql = "DELETE FROM users WHERE  = ?"
//     sql = mysql.format(sql, [req.params.first_name])
  
//     pool.query(sql, (err, results) => {
//       if (err) return handleSQLError(res, err)
//       return res.json({ message: `Deleted ${results.affectedRows} user(s)` });
//     })
// }

module.exports = {
    getAllClients,
    // getClientById,
    // createClient,
    // updateClientById,
    // deleteClientByName
  }