require("dotenv").config();
const express = require("express")
const connection = require("./conf");
const app = express();
const port = 3010;

const passport = require("passport")
require("./passport-strategy")
const auth = require('./auth')

const cors = require('cors');
app.use(cors())

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const userLoged = 1

app.use('/auth', auth);
//app.use("/user", passport.authenticate('jwt', { session: false }), user);


app.get("/test", passport.authenticate("jwt", { session: false }), (req, res) => {
  console.log('Connected user ', req.user)
  res.send(`authorized for user ${req.user.mail} with an id ${req.user.id}`)
})

app.get('/api/items', (req, res) => {
  connection.query("SELECT * FROM items", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving items");
    } else {
      res.json(results);
    }
  })
})

app.get('/api/adventurer', passport.authenticate("jwt", { session: false }), (req, res) => {
  connection.query("SELECT * FROM adventurers WHERE id=?", req.user.id, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving your adventurer's informations");
    } else {
      res.json(results);
    }
  })
})

app.put('/api/adventurer/:id', (req, res) => {
  const idAdventurer = req.params.id;
  const formData = req.body;

  connection.query("UPDATE adventurers SET ? WHERE id=?", [formData, idAdventurer], err => {
    if (err) {
      console.log(err);
      res.status(500).send("Error during the Adventurer's update")
    } else {
      res.sendStatus(200)
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