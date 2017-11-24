import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { scaleDetectionStart, scaleDetectionEnd } from '../actions/';
import Scale from '../components/Scale';

class ScaleContainer extends Component {
  render() {
    const { actions, musicKey, scale, scaleNotes } = this.props;
    return <Scale actions={actions} musicKey={musicKey} scale={scale} scaleNotes={scaleNotes} />;
  }
}

ScaleContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = { musicKey: state.key.key, scale: state.scale.scale, scaleNotes: state.scale.notes };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { scaleDetectionStart, scaleDetectionEnd };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(ScaleContainer);
