import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { addNote, chordSlotPlaying } from './actions';
import App from './containers/App';
import configureStore from './stores';
import { Note } from 'tonal';

const store = configureStore();

// https://i.stack.imgur.com/8a76z.jpg
const LAUNCHPAD_MIDI_MAP = [
  64, 65, 66, 67, 96, 97, 98, 99,
  60, 61, 62, 63, 92, 93, 94, 95,
  56, 56, 58, 58, 88, 89, 90, 91
];


window.sendNote = function (channel, noteNumber, status, velocity) {
  if (channel === 0) {
    store.dispatch(addNote({
      noteNumber: noteNumber,
      noteName: Note.fromMidi(noteNumber),
      status: status,
      velocity: velocity,
      channel: channel
    }));
  } else {
    let slotIndex = LAUNCHPAD_MIDI_MAP.indexOf(noteNumber);
    let state = store.getState();
    let slot = state.chords.slots[slotIndex];
    if (!slot) {
      return;
    }

    store.dispatch(chordSlotPlaying(slot, status === 9));
  }
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
