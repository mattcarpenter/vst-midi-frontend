/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SET_KEY } from '../actions/const';

const initialState = { key: 'C' };

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case SET_KEY: {
      // Modify next state depending on the action and return it
      nextState.key = action.key;
      return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
