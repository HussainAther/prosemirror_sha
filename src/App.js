import React from 'react';
import './App.css';
import ProseMirrorEditor from './components/ProseMirrorEditor';
import AutocompleteEditor from './components/AutocompleteEditor';

function App() {
  return (
    <div className="App">
      <h1>Draft.js Autocomplete Editor</h1>
      <AutocompleteEditor />  {/* Ensure this is rendered here */}
    </div>
  );
}

export default App;

