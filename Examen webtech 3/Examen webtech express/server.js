const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/movies',
  (err, database) => {
    if (err) return console.log(err)
    db = database.db('movies')
    app.listen(process.env.PORT || 4000, () => {
      console.log('Listening on port 4000')
    })
  })

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

// Redirect to list
app.get("/", (req, res) => {
    res.redirect("/list");
  });

// Show the add movies form
app.get("/add", (req, res) => {
    res.render("add.ejs", {});
  });

// List all movies
app.get("/list", (req, res) => {
    db.collection("movies")
      .find()
      .toArray((err, result) => {
        if (err) return console.log(err);
        res.render("list.ejs", { movies: result });
      });
  });

// Add a movie to the db
app.post('/add', (req, res) => {
    db.collection('movies').insertOne(req.body, (err, result) => {
       if (err) throw err
       res.redirect("/list");
    })
  })
// search a movie
app.post('/search', (req, res) => {
    var query = { name: req.body.name }
    db.collection('movies').find(query).toArray(function(err, result) {
      if (err) throw err
      if (err) return console.log(err);
      if (result == "") res.render("search_not_found.ejs", {});
      else res.render("search_result.ejs", { movie: result[0] });
          
    res.redirect("/list");
    });
   })
// Show the search form
app.get("/search", (req, res) => {
    res.render("search.ejs", { movies: "" });
  });

// Delete a movie
app.post("/delete", (req, res) => {
    db.collection("movies").findOneAndDelete(
      { name: req.body.name },
      (err, result) => {
        if (err) return res.send(500, err);
        res.redirect("/list");
      }
    );
  });
// Show the delete form
app.get("/delete", (req, res) => {
    res.render("delete.ejs", { movies: ""});
});
  