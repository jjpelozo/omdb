// server configs
const express = require("express");
const app = express();
const db = require("./db/index");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;

const index = require("./routes/index");
const User = require("./models/Users");
const router = express.Router();

app.use(express.json());

app.use(cookieParser());

app.use(sessions({ secret: "omdb", resave: true, saveUninitializer: true }));

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) {
            return done(null, false);
          }

          user.hash(password, user.salt).then((hash) => {
            if (hash !== user.password) {
              return done(null, false);
            }
            return done(null, user);
          });
        })
        .catch(done);
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id)
    .then((user) => {
      done(null, user);
    })
    .catch(done);
});

app.use("/", index);

app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).send(err.message);
});

db.sync({ force: false }).then(() => {
  console.log("concetada a la base de datos");
  app.listen(3001);
  console.log("Servidor escuchado en el puerto 3001");
});
