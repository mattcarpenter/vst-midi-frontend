import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setKey } from '../actions/';
import Key from '../components/Key';

class KeyContainer extends Component {
  render() {
    const { actions, musicKey } = this.props;
    return <Key actions={actions} musicKey={musicKey} />;
  }
}

KeyContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = { musicKey: state.key.key };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = { setKey };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);
