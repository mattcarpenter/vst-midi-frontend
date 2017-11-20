import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './keyboard.cssmodule.css';
import PianoKeyboard from 'piano-keyboard';
import { KEYBOARD_MODE_PREVIEW, NOTE_STATUS_ON, NOTE_STATUS_OFF } from '../actions/const';

class Keyboard extends React.Component {
  componentDidMount() {
    const pianoKeyboard = new PianoKeyboard({
      element: document.querySelector('#keyboard-component'),
      range: ['c2', 'c#8'],
      ally: true
    });
    pianoKeyboard.update();
    this.pianoKeyboard = pianoKeyboard;
  }

  render() {
    
    // When KEYBOARD_MODE_PREVIEW, the keyboard will show each "on" note from the output
    if (this.props.mode === KEYBOARD_MODE_PREVIEW) {
      const notes = this.props.notes.out;
      Object.keys(notes).forEach((note) => {
        if (notes[note].status == NOTE_STATUS_OFF) {
          this.pianoKeyboard.noteOff(notes[note].noteName);
        } else {
          this.pianoKeyboard.noteOn(notes[note].noteName);
        }
      });
    }

    return (
      <div>
        <div>Mode: {this.props.mode}</div>
        <div id="keyboard-component" className="keyboard-component" styleName="keyboard-component">
          
        </div>
      </div>
    );
  }
}

Keyboard.displayName = 'Keyboard';
Keyboard.propTypes = {};
Keyboard.defaultProps = {};

export default cssmodules(Keyboard, styles);
