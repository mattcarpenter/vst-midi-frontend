import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './chordslot.cssmodule.css';

class ChordSlot extends React.Component {

  setPlaying(playing) {
    this.props.actions.chordSlotPlaying(this.props.slot, playing);
  }

  toggleRecording() {
    this.props.actions.chordSlotRecording(this.props.slot, !this.props.slot.recording);
  }

  toggleEditing() {
    this.props.actions.chordSlotEditing(this.props.slot, !this.props.slot.editing);
  }

  render() {
    let slot = this.props.slot;

    return (
      <div className="chordslot-component" styleName="chordslot-component">
        
        <footer>
          <div className={'btn-record ' + (slot.recording ? 'recording' : '')}>
            <i
              className="fa fa-circle"
              aria-hidden="true"
              onClick={()=>this.toggleRecording()}></i>
          </div>
          <div className={'btn-edit ' + (slot.editing ? 'editing' : '')}>
            <i
              className="fa fa-pencil-square-o"
              aria-hidden="true"
              onClick={()=>this.toggleEditing()}></i>
          </div>
          <div className={'btn-play ' + (slot.playing ? 'playing' : '')} style={{float:'right'}}>
            <i
              className="fa fa-headphones"
              aria-hidden="true"
              onMouseDown={()=>this.setPlaying(true)}
              onMouseUp={()=>this.setPlaying(false)}
              onMouseLeave={()=>this.setPlaying(false)}></i>
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
