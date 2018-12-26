const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy;
const bcrypt = require("bcrypt")
const ExtractJWT = passportJWT.ExtractJwt;
const connection = require('./conf.js')

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function (email, password, cb) {
    connection.query("SELECT * FROM adventurers WHERE email = ?", email, (err, result) => {
      let error = false;
      if (!result[0]) {
        error = true;
      } else {
        if (!bcrypt.compareSync(password, result[0].password)) {
          error = true;
        }
      }
      if (error) {
        return cb(null, false, {
          message: "Incorrect email or password. "
        });
      } else {
        return cb(
          null,
          { id: result[0].id, email, username: result[0].username },
          { message: "Logged In Successfully" }
        );
      }
    })
  }
))


passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
      return cb(null, jwtPayload)
    })
)