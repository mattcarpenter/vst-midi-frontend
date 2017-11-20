import { SET_KEYBOARD_MODE } from './const';

function action(mode) {
  return { type: SET_KEYBOARD_MODE, mode: mode };
}

module.exports = action;
