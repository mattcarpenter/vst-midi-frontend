/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { ADD_NOTE, PREVIEW_CHORD_START, PREVIEW_CHORD_STOP, CHORD_SLOT_PLAYING } from '../actions/const';
import { Chord, Note } from 'tonal';
import s11 from 'sharp11';

const initialState = { in: {}, out: {} };


function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case ADD_NOTE: {
      nextState.in = Object.assign({}, nextState.in);
      nextState.out = Object.assign({}, nextState.out);

      nextState.in[action.note.noteNumber] = action.note;
      nextState.out[action.note.noteNumber] = action.note;   
      return nextState;
    }

    case PREVIEW_CHORD_START: {
      // Determine notes
      let notes = Chord.notes(action.chordName);
      let updatedNotes = notesToMap(notes, 9, 127);
      window.returnNotes(updatedNotes);
      nextState.out = Object.assign(nextState.out, updatedNotes);
      return nextState;
    }

    case PREVIEW_CHORD_STOP: {
      let notes = Chord.notes(action.chordName);
      let updatedNotes = notesToMap(notes, 8, 127);
      window.returnNotes(updatedNotes);
      nextState.out = Object.assign(nextState.out, updatedNotes);
      return nextState;
    }

    case CHORD_SLOT_PLAYING: {
      let objs = [nextState.out];
      Object.keys(action.slot.notes || {}).forEach((noteNumber) => {
        let note = Object.assign({}, action.slot.notes[noteNumber]);
        note.status = action.playing ? 9 : 8;
        let newNote = {};
        newNote[noteNumber] = note;
        objs.push(newNote);
      });

      let notesToReturn = Object.keys(action.slot.notes)
        .map((noteNumber) => {
          let note = Object.assign({},action.slot.notes[noteNumber]);
          note.status = action.playing ? 9 : 8;
          return note;
        })
        .reduce((acc, curr) => {
          acc[curr.noteNumber] = curr;
          return acc;
        }, {});

      window.returnNotes(notesToReturn);
      nextState.out = Object.assign.apply(this, objs);
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;

function notesToMap(notes, status, velocity) {
  let s11Chord = s11.chord.create(s11.chord.identifyArray(notes), 4);
  let notes2 = s11Chord.chord;
  notes2.pop();
  return notes2.reduce((acc, curr) => {

    // E# is the same as F. the piano-keyboard module blows up on E# so
    // let's just coerce it to F.
    if (curr.name === 'E#') {
      curr.name = 'F';
    }
    // Todo: pass in an octave
    let midiCode = Note.midi(curr.name + curr.octave);
    acc[midiCode] = {
      noteNumber: midiCode,
      noteName: curr.name + curr.octave,
      status: status,
      velocity: velocity
    };
    return acc;
  }, {});
}
