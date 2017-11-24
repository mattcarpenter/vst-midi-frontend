import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './keyboard.cssmodule.css';
//import PianoKeyboard from 'piano-keyboard';
import PianoKeyboard from '../lib/keyboard';
import { Note } from 'tonal';
import { KEYBOARD_MODE_MONITOR_OUT, NOTE_STATUS_ON, NOTE_STATUS_OFF } from '../actions/const';
import { Card, CardMedia, CardText } from 'material-ui/card';

const FLATS = Note.names(' b').map((note) => note.toLowerCase());
const SHARPS = Note.names(' #');

class Keyboard extends React.Component {
  componentDidMount() {
    const pianoKeyboard = new PianoKeyboard({
      element: document.querySelector('#keyboard'),
      range: ['c1', 'c#7'],
      ally: true
    });
    pianoKeyboard.update();
    this.pianoKeyboard = pianoKeyboard;
  }

  flatToSharp(note) {
    if (note.length === 3 && note[1].toLowerCase() === 'b') {
      return SHARPS[FLATS.indexOf(note.substr(0,2).toLowerCase())] + note[2];
    }
    return note;
  }

  render() {
    
    // When KEYBOARD_MODE_MONITOR_OUT, the keyboard will show each "on" note from the output
    if (this.props.mode === KEYBOARD_MODE_MONITOR_OUT) {
      const notes = this.props.notes.out;
      Object.keys(notes).forEach((note) => {
        if (notes[note].status == NOTE_STATUS_OFF) {
          this.pianoKeyboard.noteOff(this.flatToSharp(notes[note].noteName));
        } else {
          this.pianoKeyboard.noteOn(this.flatToSharp(notes[note].noteName));
        }
      });
    }

    return (
      <div className="keyboard-component" styleName="keyboard-component">
        <div>Mode: {this.props.mode}</div>
        <div id="keyboard"></div>
      </div>
    );
  }
}

Keyboard.displayName = 'Keyboard';
Keyboard.propTypes = {};
Keyboard.defaultProps = {};

export default cssmodules(Keyboard, styles);
