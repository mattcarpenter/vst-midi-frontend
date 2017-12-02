import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import { KEYBOARD_MODE_CHORD_EDIT } from '../actions/const';
import Keyboard from '../components/Keyboard';

class KeyboardContainer extends Component {
  render() {
    const { actions, notes, mode, chordSlot } = this.props;
    return <Keyboard actions={actions} mode={mode} notes={notes} chordSlot={chordSlot} />;
  }
}

KeyboardContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  let activeChordSlot;

  // Locate current chord slot (if any)
  if (state.keyboard.mode === KEYBOARD_MODE_CHORD_EDIT) {
    state.chords.slots.forEach((slot) => {
      if (slot.editing) {
        activeChordSlot = slot;
      }
    });
  }

  const props = { notes: state.notes, mode: state.keyboard.mode, chordSlot: activeChordSlot };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardContainer);
