import { SET_KEY } from './const';

function action(key) {
  return { type: SET_KEY, key };
}

module.exports = action;
