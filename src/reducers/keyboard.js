/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_KEYBOARD_MODE, KEYBOARD_MODE_MONITOR_OUT } from '../actions/const';

const initialState = { mode: KEYBOARD_MODE_MONITOR_OUT };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case SET_KEYBOARD_MODE: {
      nextState.mode = action.mode;
      return nextState;
    }

    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
