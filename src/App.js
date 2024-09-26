import React from 'react';
import './App.css';
import ProseMirrorEditor from './components/ProseMirrorEditor';
import AutocompleteEditor from './components/AutocompleteEditor';

function App() {
  return (
    <div className="App">
      <h1>Editor Demo</h1>
      {/* Uncomment the line below to use ProseMirrorEditor */}
      <ProseMirrorEditor /> 
      <AutocompleteEditor />
    </div>
  );
}

export default App;
