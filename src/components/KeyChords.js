import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './keychords.cssmodule.css';
import ChordEntity from './ChordEntity';
const tonalKey = require('tonal-key');

class KeyChords extends React.Component {

  render() {
    
    // Get chords for the current key
    let key = (this.props.musicKey || '');
    if (key.indexOf('m') > -1) {
      key = key.replace('m', ' minor');
    } else {
      key += ' major';
    }

    let chords = tonalKey.chords(key);
    let chordEntities = chords.map((chord, index) => {
      return (
        <ChordEntity
          chordName={chord}
          key={index}
          musicKey={this.props.musicKey}
          onPlay={this.props.actions.previewChordStart.bind(this)}
          onStop={this.props.actions.previewChordStop.bind(this)} />
      );
    });

    return (
      <div className="keychords-component" styleName="keychords-component">
        {chordEntities}
      </div>
    );
  }
}

KeyChords.displayName = 'KeyChords';
KeyChords.propTypes = {};
KeyChords.defaultProps = {};

export default cssmodules(KeyChords, styles);
