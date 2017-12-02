/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import chordSlotSendNote from '../actions/chordSlotSendNote.js';
import chordSlotEditing from '../actions/chordSlotEditing.js';
import chordSlotPlaying from '../actions/chordSlotPlaying.js';
import chordSlotRecording from '../actions/chordSlotRecording.js';
import previewChordStop from '../actions/previewChordStop.js';
import previewChordStart from '../actions/previewChordStart.js';
import scaleDetectionEnd from '../actions/scaleDetectionEnd.js';
import scaleDetectionStart from '../actions/scaleDetectionStart.js';
import setKey from '../actions/setKey.js';
import setKeyboardMode from '../actions/setKeyboardMode.js';
import addNote from '../actions/addNote.js';
const actions = {
  addNote,
  setKeyboardMode,
  setKey,
  scaleDetectionStart,
  scaleDetectionEnd,
  previewChordStart,
  previewChordStop,
  chordSlotRecording,
  chordSlotPlaying,
  chordSlotEditing,
  chordSlotSendNote
};
module.exports = actions;
