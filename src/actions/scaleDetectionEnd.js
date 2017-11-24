import { SCALE_DETECTION_END } from './const';

function action(parameter) {
  return { type: SCALE_DETECTION_END, parameter };
}

module.exports = action;
