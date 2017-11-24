import { PREVIEW_CHORD_START } from './const';

function action(chordName) {
  return { type: PREVIEW_CHORD_START, chordName };
}

module.exports = action;
