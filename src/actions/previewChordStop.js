import { PREVIEW_CHORD_STOP } from './const';

function action(chordName) {
  return { type: PREVIEW_CHORD_STOP, chordName };
}

module.exports = action;
