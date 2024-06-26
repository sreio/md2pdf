import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import styled from 'styled-components';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mdn-like.css';
import 'codemirror/mode/gfm/gfm.js';
import { initialText } from '../../../Container/Hooks/InitialText';
let localStorageValue = window.localStorage.getItem("sreio_md2pdf")  ?? initialText
const Editor = ({ className, setText }) => {
  return (
    <CodeMirror
      className={className}
      value={localStorageValue}
      options={{
        mode: 'gfm',
        theme: 'mdn-like',
        lineNumbers: true,
        lineWrapping: true
      }}
      onChange={(editor, data, value) => {
        window.localStorage.setItem('sreio_md2pdf', value);
        setText(value);
      }}
    />
  );
};
export default styled(Editor)`
  height: 100%;
  .CodeMirror {
    height: 100%;
    line-height: 1.5;
  }
`;
