import React, {useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import Editor from './components/Editor';
// import IframeResizer from 'iframe-resizer-react'

function App() {

  const [openedEditor, setOpenedEditor] = useState('html');

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState(``);


  const onTabClick = (editorName) => {
    setOpenedEditor(editorName);
  };

  // const BtnElList = document.querySelector('Button');

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        `
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `
      )
    }, 250);
    // var actual_height = {srcDoc}.scrollHeight + "px";

    return () => clearTimeout(timeOut)
  }, [html, css, js])

  return (
    <div className="App">
      <p>CODE-INATOR</p>
      <div className="tab-button-container">
        <Button title="HTML" 
        className={openedEditor === "html" ? "active" : undefined}
        onClick={() => {
          onTabClick('html')
        }} />
        <Button title="CSS" 
        className={openedEditor === "css" ? "active" : undefined}
        onClick={() => {
          onTabClick('css')
        }} />
        <Button title="JavaScript" 
        className={openedEditor === "js" ? "active" : undefined}
        onClick={() => {
          onTabClick('js')
        }} />
      </div>
      <div className="editor-container">
        {
          openedEditor === 'html' ? (
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              setEditorState={setHtml}
            />
          ) : openedEditor === 'css' ? (
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              setEditorState={setCss}
            />
          ) : (
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              setEditorState={setJs}
            />
          )
        }
      </div>
      <div className="output">
        ↓ OUTPUT ↓ 
      </div>
      <div className='resbox'>
        <iframe
          id="my_iframe"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          width="100%"
        />
      </div>
      <div className='credits'>
        <p>Made With ❤ By DebsPats ©</p>
      </div>
    </div>
  );
}

export default App;
