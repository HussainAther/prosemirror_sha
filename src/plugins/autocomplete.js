// src/plugins/autocomplete.js
import { Plugin } from 'prosemirror-state';

const triggerCharacters = {
  '#': 'hashtag',
  '@': 'person',
  '<>': 'relation'
};

const suggestions = {
  hashtag: ['#react', '#javascript', '#coding'],
  person: ['@john', '@jane', '@doe'],
  relation: ['<>project', '<>task', '<>goal'],
};

const autocompletePlugin = new Plugin({
  props: {
    handleTextInput(view, from, to, text) {
      const state = view.state;
      const $from = state.selection.$from;
      const textBefore = $from.nodeBefore ? $from.nodeBefore.textContent : '';

      let match = null;
      let triggerType = null;

      for (let trigger in triggerCharacters) {
        if (textBefore.endsWith(trigger)) {
          triggerType = triggerCharacters[trigger];
          match = trigger;
          break;
        }
      }

      if (match) {
        const matchString = text;
        const filteredSuggestions = suggestions[triggerType].filter(suggestion =>
          suggestion.startsWith(matchString)
        );
        
        // Show suggestions (you need to implement the logic for rendering this)
        console.log('Suggestions:', filteredSuggestions);
        
        // Implement your logic for displaying suggestions and handling user interactions
        
        return true;
      }

      return false;
    },

    handleKeyDown(view, event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Enter' || event.key === 'Tab') {
        // Add logic to navigate and select from the suggestions
        return true;
      }
      return false;
    }
  }
});

export default autocompletePlugin;

