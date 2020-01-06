//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'build')))
// Anything that doesn't match the above, send back index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + 'build/index.html'))
})
//////////////////////////////////////////////////////

// connect to local mongodb
// mongoose.connect("mongodb://localhost:27017/keepNoteDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// connect to online mongodb
mongoose.connect(
  "mongodb+srv://admin-reach:test123@mycluster-gzlxg.mongodb.net/keepNoteDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Schema
const noteSchema = {
  title: String,
  content: String
};

// model
const Note = mongoose.model("Note", noteSchema);

app
  .route("/notes")
  .get(function(req, res) {
    Note.find(function(err, noteList) {
      if (err) {
        res.send(err);
      } else {
        res.send(noteList);
      }
    });
  })
  .post(function(req, res) {
    // console.log(req.body.title);
    // console.log(req.body.content);

    const newNote = new Note({
      title: req.body.title,
      content: req.body.content
    });

    newNote.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully saved the new note!");
      }
    });
  });

app
  .route("/notes/:noteId")
  .get(function(req, res) {
    Note.findOne(
      {
        _id: req.params.noteId
      },
      function(err, foundNote) {
        if (err) {
          res.send(err);
        } else {
          res.send(foundNote);
        }
      }
    );
  })
  .delete(function(req, res) {
    Note.deleteOne(
      {
        _id: req.params.noteId
      },
      function(err) {
        if (err) {
          res.send(err);
        } else {
          res.send("The note has been deleted successfully!");
        }
      }
    );
  });

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});
