import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './keyboard.cssmodule.css';
//import PianoKeyboard from 'piano-keyboard';
import PianoKeyboard from '../lib/keyboard';
import { Note } from 'tonal';
import { KEYBOARD_MODE_MONITOR_OUT, NOTE_STATUS_ON, NOTE_STATUS_OFF, KEYBOARD_MODE_CHORD_EDIT } from '../actions/const';
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
    
    pianoKeyboard.on('noteEvent', (params) => {
      if (this.props.mode === KEYBOARD_MODE_CHORD_EDIT) {
        // Toggle note

        // Get MIDI code
        let noteNumber = Note.midi(params.noteName.replace('E#', 'F'));

        let noteToEdit = this.props.chordSlot.notes[noteNumber];
        let newStatus = (noteToEdit || {}).status === 9 ? 8 : 9;
        this.props.actions.chordSlotSendNote({
          noteName: params.noteName,
          status: newStatus,
          chordSlot: this.props.chordSlot
        });
      }
    });
    
    this.pianoKeyboard = pianoKeyboard;
  }

  render() {
    // Initially set all notes off
    if (this.pianoKeyboard) {
      this.pianoKeyboard.noteOff();
    }
    
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

    // When KEYBOARD_MODE_CHORD_EDIT, the keyboard will show the chord slot currently being edited
    if (this.props.mode === KEYBOARD_MODE_CHORD_EDIT) {

      // Update keyboard to match chord being edited
      Object.keys(this.props.chordSlot.notes || {}).forEach((noteNumber) => {
        let note = this.props.chordSlot.notes[noteNumber];
        if (note.status == NOTE_STATUS_ON) {
          this.pianoKeyboard.noteOn(this.flatToSharp(note.noteName));
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

  /**
   * Converts sharp notes to the equivalent flat notes
   *
   * @param {object} note
   */
  flatToSharp(note) {
    if (note.length === 3 && note[1].toLowerCase() === 'b') {
      return SHARPS[FLATS.indexOf(note.substr(0,2).toLowerCase())] + note[2];
    }
    return note;
  }
}

Keyboard.displayName = 'Keyboard';
Keyboard.propTypes = {};
Keyboard.defaultProps = {};

export default cssmodules(Keyboard, styles);
