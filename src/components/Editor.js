import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import { faCompressAlt } from '@fortawesome/free-solid-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
export default function Editor(props) {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapsed-btn"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon
            icon={open ? faCompressAlt : faExpandAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          mode: language,
          lineWrapping: true,
          line: true,
          lineNumbers: true,
          theme: 'material',
        }}
      />
    </div>
  );
}
