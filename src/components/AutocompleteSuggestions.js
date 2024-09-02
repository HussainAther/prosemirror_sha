// src/components/AutocompleteSuggestions.js
import React from 'react';

const AutocompleteSuggestions = ({ suggestions, highlightedIndex }) => {
  return (
    <div className="autocomplete-suggestions">
      {suggestions.map((suggestion, index) => (
        <div key={index} className={`suggestion ${index === highlightedIndex ? 'highlighted' : ''}`}>
          {suggestion}
        </div>
      ))}
    </div>
  );
};

export default AutocompleteSuggestions;

