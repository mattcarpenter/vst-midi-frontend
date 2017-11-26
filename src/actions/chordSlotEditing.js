import { CHORD_SLOT_EDITING } from './const';

function action(slot, editing) {
  return { type: CHORD_SLOT_EDITING, slot: slot, editing: editing };
}

module.exports = action;
