/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addNote,
  setKeyboardMode,
  setKey,
  scaleDetectionStart,
  scaleDetectionEnd,
  previewChordStart,
  previewChordStop,
  chordSlotRecording,
  chordSlotPlaying,
  chordSlotEditing,
  chordSlotSendNote
} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {
  render() {
    const {actions, notes, keyboard, scale, musicKey, chords, chordSlots} = this.props;
    return (
      <Main
        actions={actions}
        notes={notes}
        keyboard={keyboard}
        scale={scale}
        musicKey={musicKey}
        scale={scale}
        chords={chords}
        chordSlots={chordSlots}/>
    );
  }
}
/* Populated by react-webpack-redux:reducer
 *
 * HINT: if you adjust the initial type of your reducer, you will also have to
 *       adjust it here.
 */
App.propTypes = {
  actions: PropTypes.shape({
    addNote: PropTypes.func.isRequired,
    setKeyboardMode: PropTypes.func.isRequired,
    setKey: PropTypes.func.isRequired,
    scaleDetectionStart: PropTypes.func.isRequired,
    scaleDetectionEnd: PropTypes.func.isRequired,
    previewChordStart: PropTypes.func.isRequired,
    previewChordStop: PropTypes.func.isRequired,
    chordSlotRecording: PropTypes.func.isRequired,
    chordSlotPlaying: PropTypes.func.isRequired,
    chordSlotEditing: PropTypes.func.isRequired,
    chordSlotSendNote: PropTypes.func.isRequired
  }),
  notes: PropTypes.shape({}),
  keyboard: PropTypes.shape({}),
  scale: PropTypes.shape({}),
  chords: PropTypes.shape({})
};
function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    notes: state.notes,
    keyboard: state.keyboard,
    musicKey: state.key.key,
    scale: state.scale,
    chords: state.chords,
    chordSlots: state.chords.slots
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    addNote,
    setKeyboardMode,
    setKey,
    scaleDetectionStart,
    scaleDetectionEnd,
    previewChordStart,
    previewChordStop,
    chordSlotRecording,
    chordSlotPlaying,
    chordSlotEditing,
    chordSlotSendNote
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
