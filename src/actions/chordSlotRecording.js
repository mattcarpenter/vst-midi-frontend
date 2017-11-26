import { CHORD_SLOT_RECORDING } from './const';

function action(slot, recording) {
  return { type: CHORD_SLOT_RECORDING, slot: slot, recording: recording };
}

module.exports = action;
