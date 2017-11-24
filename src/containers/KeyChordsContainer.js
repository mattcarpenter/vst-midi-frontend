import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { previewChordStart, previewChordStop } from '../actions/';
import KeyChords from '../components/KeyChords';

class KeyChordsContainer extends Component {
  render() {
    const { actions, musicKey } = this.props;
    return <KeyChords actions={actions} musicKey={musicKey} />;
  }
}

KeyChordsContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = { musicKey: state.key.key };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { previewChordStart, previewChordStop };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyChordsContainer);
