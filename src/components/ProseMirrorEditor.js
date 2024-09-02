import React, { useEffect, useRef, useState } from 'react';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { schema } from 'prosemirror-schema-basic';
import { keymap } from 'prosemirror-keymap';
import { baseKeymap } from 'prosemirror-commands';

import './ProseMirrorEditor.css'; // Add styles as needed

const ProseMirrorEditor = () => {
  const editorRef = useRef(null);
  const [editorView, setEditorView] = useState(null);

  useEffect(() => {
    const state = EditorState.create({
      schema,
      plugins: [keymap(baseKeymap)],
    });

    const view = new EditorView(editorRef.current, {
      state,
      dispatchTransaction(transaction) {
        const newState = view.state.apply(transaction);
        view.updateState(newState);
      },
    });

    setEditorView(view);

    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editorRef} className="editor"></div>;
};

export default ProseMirrorEditor;

