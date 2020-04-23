const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    //no guarda la cookie cada vez que se haga un cambio
    resave: false,
    // si la cookie no se incializado no la guarde
    saveUninitialized: false,
    //frase para cifrarlo
    secret: "keyboard cat",
  })
);
//definimos la ruta
app.get("/", (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: "world", counter: req.session.count });
});

app.listen(3001, () => {
  console.log("Listening http://localhost:3001");
});
