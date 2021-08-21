import React from 'react';

import { NoteList } from './components/NoteList';
import { Navigation } from './components/Navigation/Navigation';

import 'bulma';
import './App.scss';
import './styles/general.scss';

class App extends React.Component {
  state = {
    selectedUserId: 0,
  };

  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="App__content">
          <NoteList />
        </div>
      </div>
    );
  }
}

export default App;
