require("dotenv").config();
const express = require("express")
const connection = require("./conf");
const app = express();
const port = 3010;
const cors = require('cors');

app.get('/api/items', (req, res) => {
  connection.query("SELECT * FROM monsters", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving items");
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