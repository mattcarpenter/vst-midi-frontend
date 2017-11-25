import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './chordslot.cssmodule.css';

class ChordSlot extends React.Component {

  render() {
    return (
      <div className="chordslot-component" styleName="chordslot-component">
        
        <footer>
          <div className="btn-record">
            <i className="fa fa-circle" aria-hidden="true"></i>
          </div>
          <div className="btn-edit">
            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
          </div>
          <div className="btn-play" style={{float:'right'}}>
            <i className="fa fa-headphones" aria-hidden="true"></i>
          </div>
        </footer>
      </div>
    );
  }
}

ChordSlot.displayName = 'ChordSlot';
ChordSlot.propTypes = {};
ChordSlot.defaultProps = {};

export default cssmodules(ChordSlot, styles);
