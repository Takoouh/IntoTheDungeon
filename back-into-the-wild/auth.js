const express = require('express')
const router = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const passport = require("passport")
const connection = require('./conf')
require('./passport-strategy')

/* POST SIGNUP */
router.post('/signup', function (req, res, next) {
  let hash = bcrypt.hashSync(req.body.password, 10)
  connection.query("INSERT INTO adventurers(email,name, password) VALUES(?,?,?)", [req.body.email, req.body.name, hash], function (error, result, fields) {
    if (error) {
      res.status(500).json({ flash: error.message })
    } else {
      res.status(200).json({
        flashMessage: {
          message: "You have been signed up !",
          type: "success"
        }
      })
    }
  })
})


/* POST SIGNIN */
router.post('/signin', function (req, res, next) {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: "Something is not right",
        user: user
      });
    }
    if (!user) {
      return res.status(400).json({ message: info.message })
    }

    const token = jwt.sign(user, 'your_jwt_secret');
    return res.json({ user, token })

  })(req, res);
})

module.exports = router;