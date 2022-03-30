import React from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

export default function Editor({ language, displayName, value, onChange }) {    
    const handleChange = (editor, data, value) => {
        onChange(value)
    }
    
    return (
        <div className="editor-container">
            <div className="editor-title">
                {displayName}
                <button>O/C</button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true,
                }}
            />
        </div>
    );
}
