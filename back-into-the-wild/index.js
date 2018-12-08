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


app.get('/api/monsters/floor=:id', (req, res) => {
  const floor = [req.params.id];
  connection.query(`SELECT monsterId FROM floorBestiary WHERE floor = ${floor}`, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving monster's from this floor");
    } else {
      res.json(results);
    }
  })
})

app.get('/api/monster/:id', (req, res) => {
  const id = [req.params.id];
  connection.query(`SELECT * FROM monsters WHERE id = ${id}`, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving this monster");
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