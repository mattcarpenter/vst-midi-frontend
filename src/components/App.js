import React from 'react';
import YeomanImage from './YeomanImage';
import './app.css';
import { Note, midi, transpose, scale } from 'tonal'
import MockHostContainer from '../containers/MockHostContainer'
import KeyboardContainer from '../containers/KeyboardContainer'

class AppComponent extends React.Component {

  render() {
    let notes = [];
    Object.keys(this.props.notes.in).forEach((noteNumber) => {
        let note = this.props.notes.in[noteNumber];
        if (note.status == 9) {
            notes.push(Note.fromMidi(noteNumber));
        }
    });

    return (
      <div className="index">
        <div>
          {JSON.stringify(notes, null, '\t')}
        </div>
        <KeyboardContainer />
        <MockHostContainer />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
