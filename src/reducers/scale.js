/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SCALE_DETECTION_START, SCALE_DETECTION_END, ADD_NOTE } from '../actions/const';
var detectScale = require('tonal-detector').scale;

const initialState = {
  detecting: false,
  notes: []
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case SCALE_DETECTION_START: {
      // Modify next state depending on the action and return it
      nextState.detecting = true;
      return nextState;
    }

    case SCALE_DETECTION_END: {
      nextState.detecting = false;
      // todo: detect
      nextState.scale = detectScale(nextState.notes);
      nextState.notes = [];
      return nextState;
    }

    case ADD_NOTE: {
      if (nextState.detecting) {
        if (nextState.notes.indexOf(action.note.noteName) === -1) {
          nextState.notes = [...nextState.notes, action.note.noteName];
        }
      }
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
