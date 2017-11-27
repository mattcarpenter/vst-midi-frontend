import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { addNote } from './actions';
import App from './containers/App';
import configureStore from './stores';
import { Note } from 'tonal';

const store = configureStore();

window.sendNote = function (channel, noteNumber, status, velocity) {
  store.dispatch(addNote({
    noteNumber: noteNumber,
    noteName: Note.fromMidi(noteNumber),
    status: status,
    velocity: velocity,
    channel: channel
  }));
};

window.returnNotes = function (notes) {
  Object.keys(notes).forEach((noteNumber) => {
    let note = notes[noteNumber];
    window.returnNote(note.noteNumber, note.status, note.velocity);
  });
}

window.returnNote = function (noteNumber, status, velocity) {
  try {
    window.external.invoke_(noteNumber + ',' + status + ',' + velocity);
  } catch (e) {
    console.log('window.external.invoke_('+noteNumber + ',' + status + ',' + velocity +')');
  }
}

/*let lastState = store.getState();
store.subscribe(function (state) {
  let newState = store.getState();
  Object.keys(newState.notes.out).forEach((noteNumber) => {
    if ((lastState.notes.out[noteNumber] || {}).status !== 9 && newState.notes.out[noteNumber].status === 9) {
      console.log('note on');
    } else if ((lastState.notes.out[noteNumber] || {}).status === 9 && newState.notes.out[noteNumber].status === 8) {
      console.log('note off');
    }
  });
  lastState = newState;
});*/

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
