import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';
import { Note, midi, transpose, scale } from 'tonal'

class AppComponent extends React.Component {

  render() {
    let notes = [];
    //let notes = Object.keys(this.props.notes)
    //  .filter((note) => this.props.notes[note].status == 9);
    Object.keys(this.props.notes).forEach((noteNumber) => {
        let note = this.props.notes[noteNumber];
        if (note.status == 9) {
            notes.push(Note.fromMidi(noteNumber));
        }
    });

    return (
      <div className="index">
        {JSON.stringify(notes, null, '\t')}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
