import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './key.cssmodule.css';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import KeyChordsContainer from '../containers/KeyChordsContainer';

const KEYS = [
  'C',
  'C#m',
  'Cm',
  'D',
  'Db',
  'D#m',
  'Dm',
  'E',
  'Eb',
  'Em',
  'F#',
  'F',
  'F#m',
  'Fm',
  'G',
  'G#m',
  'Gm',
  'A',
  'Ab',
  'Am',
  'B',
  'Bb',
  'Bm',
  'Bbm'
];

class Key extends React.Component {
  setKey(event, value) {
   this.props.actions.setKey(event.target.value);
  }

  render() {
    
    let menuItems = KEYS.map((key) => (<option value={key} key={key}>{key}</option>));

    return (
      <div className="key-component" styleName="key-component">
        <div>
          Key: <select
            value={this.props.musicKey}
            onChange={this.setKey.bind(this)}
            style={{width: 100, marginTop: 0}} >
            {menuItems}
          </select>
        </div>
        <KeyChordsContainer />
      </div>
    );
  }
}

Key.displayName = 'Key';
Key.propTypes = {};
Key.defaultProps = {};

export default cssmodules(Key, styles);
