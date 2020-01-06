import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

class App extends Component {
  state = { notes: [] };

  componentDidMount() {
    this.getData();
    // set Interval
    this.interval = setInterval(this.getData, 50000);
  }

  componentWillUnmount() {
    // Clear the interval right before component unmount
    clearInterval(this.interval);
  }

  getData = () => {
    axios.get("/notes").then(res => {
      const notes = res.data;
      // console.log(notes);
      this.setState({ notes });
    });
  };

  addData = note => {
    // console.log(note);
    // const updateNotes = this.state.notes.push(note);
    // this.setState({ updateNotes });
    // console.log(this.state.notes);
    axios.post("/notes", note).then(res => {
      console.log(res);
      console.log(res.data);
    });
    this.getData();
  };

  removeData = noteId => {
    // console.log(noteId);
    // const updateNotes = this.state.notes.filter(function(note) {
    //   return note._id !== noteId;
    // });
    // console.log(updateNotes);
    // this.setState({ updateNotes });

    axios.delete("/notes/" + noteId).then(res => {
      console.log(res);
    });
    this.getData();
  };

  render() {
    return (
      <div>
        <Header />
        <CreateArea onAdd={this.addData} />
        {this.state.notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={noteItem._id}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={this.removeData}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
}

export default App;
