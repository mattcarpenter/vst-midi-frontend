import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { addNote } from './actions';
import App from './containers/App';
import configureStore from './stores';
import { Note } from 'tonal';

const store = configureStore();

window.sendNote = function (noteNumber, status, velocity) {
  store.dispatch(addNote({
    noteNumber: noteNumber,
    noteName: Note.fromMidi(noteNumber),
    status: status,
    velocity: velocity
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
    alert(e);
    console.log('window.external.invoke_('+noteNumber + ',' + status + ',' + velocity +')');
  }
}

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
