import { CHORD_SLOT_SEND_NOTE } from './const';

function action(params) {
  return { type: CHORD_SLOT_SEND_NOTE, params: params };
}

module.exports = action;
