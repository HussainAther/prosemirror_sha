import React from 'react';
import './App.css';
import ProseMirrorEditor from './components/ProseMirrorEditor';
import AutocompleteEditor from './components/AutocompleteEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProseMirrorEditor />
      </header>
    </div>
  );
}

export default App;

