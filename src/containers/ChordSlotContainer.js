import React, {
  Component,
  PropTypes
} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {} from '../actions/';
import ChordSlot from '../components/ChordSlot';

class ChordSlotContainer extends Component {
  render() {
    const { actions } = this.props;
    return <ChordSlot actions={actions} />;
  }
}

ChordSlotContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ChordSlotContainer);
