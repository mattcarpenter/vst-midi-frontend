/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { ADD_NOTE } from '../actions/const';

const initialState = { in: {}, out: {} };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case ADD_NOTE: {
      nextState.in[action.note.noteNumber] = action.note;
      nextState.out[action.note.noteNumber] = action.note;   
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
