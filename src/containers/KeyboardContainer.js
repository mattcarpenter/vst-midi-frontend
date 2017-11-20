import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import Keyboard from '../components/Keyboard';

class KeyboardContainer extends Component {
  render() {
    const { actions, notes, mode } = this.props;
    return <Keyboard actions={actions} mode={mode} notes={notes} />;
  }
}

KeyboardContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = { notes: state.notes, mode: state.keyboard.mode };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardContainer);
