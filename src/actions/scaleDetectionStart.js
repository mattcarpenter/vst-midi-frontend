import { SCALE_DETECTION_START } from './const';

function action(parameter) {
  return { type: SCALE_DETECTION_START, parameter };
}

module.exports = action;
