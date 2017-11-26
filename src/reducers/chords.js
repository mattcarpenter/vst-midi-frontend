/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { CHORD_SLOT_PLAYING, CHORD_SLOT_EDITING, CHORD_SLOT_RECORDING } from '../actions/const';

const SLOT_COUNT = 12;

const initialState = {
  slots: initializeSlots()
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    
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
      playing: false
    });
  }

  return slots;
}
