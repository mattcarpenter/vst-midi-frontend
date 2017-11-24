import React from 'react';
import cssmodules from 'react-css-modules';
import styles from './chordentity.cssmodule.css';
import s11 from 'sharp11';
import FlatButton from 'material-ui/RaisedButton';

class ChordEntity extends React.Component {

  getNumeral(mehegan) {
    console.log('mehegan:',mehegan);
    let numeral = mehegan.numeral.replace('b', '');
    if (mehegan.quality.indexOf('m') > -1) {
      numeral = numeral.toLowerCase();
    }

    return numeral;
  }

  onMouseDown(event) {
    this.props.onPlay(this.props.chordName);
  }

  onMouseUp(event) {
    this.props.onStop(this.props.chordName);
  }

  render() {
    let key = this.props.musicKey.replace('m', '');
    let mehegan = s11.mehegan.fromChord(key, this.props.chordName);
    return (
      <div className="chordentity-component" styleName="chordentity-component">
        {this.props.chordName}<br/>
        {this.getNumeral(mehegan)}<br/>
        <FlatButton
          label="▶"
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseUp={this.onMouseUp.bind(this)}
          style={{position:'absolute',left:10,right:10,minWidth:0,marginTop:5}}/>
      </div>
    );
  }
}

ChordEntity.displayName = 'ChordEntity';
ChordEntity.propTypes = {};
ChordEntity.defaultProps = {};

export default cssmodules(ChordEntity, styles);
