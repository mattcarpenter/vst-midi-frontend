/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { CHORD_SLOT_PLAYING, CHORD_SLOT_EDITING, CHORD_SLOT_RECORDING, ADD_NOTE } from '../actions/const';
import s11 from 'sharp11';

const SLOT_COUNT = 12;

const initialState = {
  slots: initializeSlots()
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {

    case ADD_NOTE: {
      // If any chord slots are recording, update the notes contained within
      nextState.slots = nextState.slots.map((slot) => {
        let nextSlot = Object.assign({}, slot);
        if (slot.recording) {
          
          if (!nextSlot.dirty) {
            nextSlot.notes = {};
            nextSlot.dirty = true;
          }

          nextSlot.notes = Object.assign({}, slot.notes);
          nextSlot.notes[action.note.noteNumber] = action.note;

          // Identify chord
          let notesList = Object.keys(nextSlot.notes || {})
            .filter((note) => nextSlot.notes[note].status === 9)
            .map((note) => nextSlot.notes[note].noteName);
          nextSlot.chordName = s11.chord.identifyArray(notesList);

          return nextSlot;
        }
        return slot;
      });
      return nextState;
    }
    
    case CHORD_SLOT_PLAYING: {
      nextState.slots = nextState.slots.map((slot) => {
        let nextSlot = Object.assign({}, slot);
        if (slot === action.slot) {
          nextSlot.playing = action.playing;
        }
        return nextSlot;
      });
      return nextState;
    }

    case CHORD_SLOT_EDITING: {
      nextState.slots = nextState.slots.map((slot) => {
        let nextSlot = Object.assign({}, slot);
        if (slot === action.slot) {
          nextSlot.editing = action.editing;
        } else {
          nextSlot.editing = false;
        }
        return nextSlot;
      });
      return nextState;
    }

    case CHORD_SLOT_RECORDING: {
      nextState.slots = nextState.slots.map((slot) => {
        let nextSlot = Object.assign({}, slot);
        if (slot === action.slot) {
          nextSlot.recording = action.recording;

          if (!action.recording) {
            nextSlot.dirty = false;
          }
        }
        return nextSlot;
      });
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;

function initializeSlots() {
  let slots = [];
  for (var i=0; i<SLOT_COUNT; i++) {
    slots.push({
      recording: false,
      editing: false,
      playing: false,
      dirty: false
    });
  }

  return slots;
}

/*function notesToMap(notes) {
  console.log("notes:",notes);

  let s11Chord = s11.chord.create(s11.chord.identifyArray(notes), 4);
  let notes2 = s11Chord.chord;
  //notes2.pop();
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
      status: curr.status,
      velocity: curr.velocity
    };
    return acc;
  }, {});
}*/