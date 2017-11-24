import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import YeomanImage from './YeomanImage';
import './app.css';
import { Note, midi, transpose, scale } from 'tonal';
import { chord } from 'tonal-detector';
import s11 from 'sharp11';
import MockHostContainer from '../containers/MockHostContainer';
import KeyboardContainer from '../containers/KeyboardContainer';
import FlatButton from 'material-ui/RaisedButton';

class AppComponent extends React.Component {

  reloadPage() {
    document.location.reload();
  }

  render() {
    let notes = [];

    Object.keys(this.props.notes.in).forEach((noteNumber) => {
        let note = this.props.notes.in[noteNumber];
        if (note.status == 9) {
            notes.push(Note.fromMidi(noteNumber));
        }
    });

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="index">
          <div>
            Notes: {JSON.stringify(notes, null, '\t')}
          </div>
          <div>
              Chord: {s11.chord.identify.apply(s11.chord.identify, notes)}
          </div>
          <KeyboardContainer />
          <MockHostContainer />
          <FlatButton label="Reload Page" onClick={this.reloadPage}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
