// src/components/AutocompleteEditor.js
import React, { useState, useEffect, useRef } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';

const AutocompleteEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [trigger, setTrigger] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const fakeData = {
    hashtag: ['#react', '#javascript', '#coding'],
    person: ['@john', '@jane', '@doe'],
    relation: ['<>idea1', '<>idea2', '<>idea3'],
  };

  const editorRef = useRef(null);

  const handleChange = (state) => {
    setEditorState(state);
    checkForTriggers(state);
  };

  const checkForTriggers = (state) => {
    const contentState = state.getCurrentContent();
    const selectionState = state.getSelection();
    const anchorKey = selectionState.getAnchorKey();
    const currentContentBlock = contentState.getBlockForKey(anchorKey);
    const text = currentContentBlock.getText();
    const triggerMatch = text.match(/[@#<>][\w]*$/); // Match #, @, <> triggers
    if (triggerMatch) {
      const matchedTrigger = triggerMatch[0][0]; // Get the trigger character
      const matchString = triggerMatch[0].slice(1); // Extract the match string
      let type = '';
      if (matchedTrigger === '#') type = 'hashtag';
      else if (matchedTrigger === '@') type = 'person';
      else if (matchedTrigger === '<') type = 'relation';
      if (type) {
        const filteredSuggestions = fakeData[type].filter((item) =>
          item.startsWith(`${matchedTrigger}${matchString}`)
        );
        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setTrigger(type);
      }
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyCommand = (command, state) => {
    if (command === 'enter-suggestion' && showSuggestions) {
      insertSuggestion();
      return 'handled';
    }
    return 'not-handled';
  };

  const handleReturn = (e) => {
    if (showSuggestions) {
      insertSuggestion();
      return 'handled';
    }
    return 'not-handled';
  };

  const insertSuggestion = () => {
    const currentContent = editorState.getCurrentContent();
    const selection = editorState.getSelection();
    const anchorKey = selection.getAnchorKey();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    const blockText = currentBlock.getText();
    const triggerMatch = blockText.match(/[@#<>][\w]*$/);
    if (!triggerMatch) return;

    const matchString = triggerMatch[0];
    const start = blockText.lastIndexOf(matchString);
    const end = start + matchString.length;
    const selectedSuggestion = suggestions[highlightedIndex] || matchString;

    const contentWithEntity = Modifier.replaceText(
      currentContent,
      selection.merge({
        anchorOffset: start,
        focusOffset: end,
      }),
      selectedSuggestion,
      null
    );

    const newEditorState = EditorState.push(editorState, contentWithEntity, 'insert-characters');
    setEditorState(newEditorState);
    setShowSuggestions(false);
  };

  const handleArrowNavigation = (e) => {
    if (showSuggestions) {
      if (e.key === 'ArrowDown') {
        setHighlightedIndex((prevIndex) => (prevIndex + 1) % suggestions.length);
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setHighlightedIndex((prevIndex) => (prevIndex - 1 + suggestions.length) % suggestions.length);
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    editorRef.current.focus();
  }, []);

  return (
    <div onKeyDown={handleArrowNavigation}>
      <Editor
        ref={editorRef}
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
        handleReturn={handleReturn}
        placeholder="Type #, @, or <> to autocomplete..."
      />
      {showSuggestions && (
        <div className="autocomplete-suggestions">
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              className={`suggestion ${index === highlightedIndex ? 'highlighted' : ''}`}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutocompleteEditor;

