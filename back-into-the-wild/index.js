require("dotenv").config();
const express = require("express")
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require('cors');

app.use(cors())

const userLoged = 1

app.get('/api/items', (req, res) => {
  connection.query("SELECT * FROM items", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving items");
    } else {
      res.json(results);
    }
  })
})

app.get('/api/adventurer', (req, res) => {
  connection.query("SELECT * FROM adventurers WHERE id=?", userLoged, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving your adventurer's informations");
    } else {
      res.json(results);
    }
  })
})

app.listen(port, err => {
  if (err) {
    throw new Error('Something went wrong ...');
  }
  console.log(`Server is listening on ${port}`)
});