// src/components/MyEditor.js
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from 'prosemirror-schema-basic';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';
import autocompletePlugin from '../plugins/autocomplete';

const MyEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const state = EditorState.create({
      schema,
      plugins: [keymap(baseKeymap), autocompletePlugin]
    });

    const view = new EditorView(editorRef.current, {
      state,
      dispatchTransaction(transaction) {
        const newState = view.state.apply(transaction);
        view.updateState(newState);
      }
    });

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editorRef}></div>;
};

export default MyEditor;

