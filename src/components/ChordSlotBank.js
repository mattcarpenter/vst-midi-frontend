import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './chordslotbank.cssmodule.css';
import ChordSlotContainer from '../containers/ChordSlotContainer';

class ChordSlotBank extends React.Component {

  render() {
    let slots = this.props.slots.map((slot) => {
      return (<ChordSlotContainer />);
    });

    return (
      <div className="chordslotbank-component" styleName="chordslotbank-component">
        {slots}
      </div>
    );
  }
}

ChordSlotBank.displayName = 'ChordSlotBank';
ChordSlotBank.propTypes = {};
ChordSlotBank.defaultProps = {};

export default cssmodules(ChordSlotBank, styles);
