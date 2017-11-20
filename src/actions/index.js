/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import setKeyboardMode from '../actions/setKeyboardMode.js';
import addNote from '../actions/addNote.js';
const actions = {
  addNote,
  setKeyboardMode
};
module.exports = actions;
