import { ADD_NOTE } from './const';

function action(note) {
  return { type: ADD_NOTE, note: note };
}

module.exports = action;
