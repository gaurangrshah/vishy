import React, { useState, useEffect, useRef } from "react";
import { ControlledEditor } from "./ReactDraft";
import { convertToRaw } from 'draft-js';
import { useToggle } from '../utils/Toggle/useToggle';
import { RenderAlert } from '../utils/alerty/renderAlert';


export const DraftFactory = () => {

  const richContent = window.localStorage.getItem('richContent');

  useEffect(() => {
    // only runs once when the component mounts, get's data if available.
    if (richContent) {
      const loaded = JSON.parse(richContent);
      const [blocks] = loaded.blocks
      const { text } = blocks
      console.log('EditorState:LoadedFromLocal:', text);
    }
  }, [])



  const [content, setContent] = useState('')
  // used to handle content updates from editor.
  const [toggle, handleToggle] = useToggle('');

  const timer = useRef(null); /* created a ref to use for the timer. */



  useEffect(() => {
    // console.log('preTimeOut', { toggle })

    if (toggle) {
      // timer only applies when toggle is active
      timer.current = setTimeout(() => {
        // setups new timer using the ref timer.current
        handleToggle(!toggle) // handleToggle fires after timeout
        // console.log('timedOut', toggle)
      }, 300) // duration gets passed in.
    }
    return () => {
      /* cleanup -- removing timer */
      // console.log('cleared', toggle);
      clearTimeout(timer.current)
    }

  }, [toggle]) // will run everytime toggle changes, only executes if toggle is true



  const handleUpdate = (updatedContent) => {
    // might be able to add a throttle to save. if autosaving, otherwise add button to save.
    setContent(updatedContent)
    // console.log('📥updateContent')
  }


  const handleSubmit = () => {
    // console.log('saverun')
    if (content) {
      const saveContent = JSON.stringify(convertToRaw(content))
      handleToggle((!toggle))
      window.localStorage.setItem('richContent', saveContent)
      console.log('💾 saved')
    }
  }

  return (
    <div>
      <ControlledEditor handleUpdate={handleUpdate} richContent={richContent} />
      <button onClick={handleSubmit} className="btn btn-success"> <span role="img" aria-label="save">💾</span></button>
      {(!toggle) && <RenderAlert message={'saved'} type='success' isOpen={true} />}
    </div>
  );
};
