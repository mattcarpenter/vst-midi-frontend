import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import MockHost from '../components/MockHost';

class MockHostContainer extends Component {
  render() {
    const { actions } = this.props;
    return <MockHost actions={actions} />;
  }
}

MockHostContainer.propTypes = {
  actions: PropTypes.shape({})
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(MockHostContainer);
