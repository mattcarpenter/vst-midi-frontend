import { CHORD_SLOT_PLAYING } from './const';

function action(slot, playing) {
  return { type: CHORD_SLOT_PLAYING, slot: slot, playing: playing };
}

module.exports = action;
