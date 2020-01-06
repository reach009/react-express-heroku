import React, {Component} from 'react';

class

function addNote(newNote) {
  this.setState(prevNotes => {
    return [...prevNotes, newNote];
  });
}
