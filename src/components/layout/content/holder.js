import React, { useState, useRef } from 'react';
import { useInput } from '../../utils/useInput/useInput'
import { Tooltip } from 'reactstrap';

// holder will hold specific bits of content and act on it.


export const StringHolder = ({ children = {}, text = '', styles = {}, className = '' }) => {
  const { value: bindput, bind: bindBindput, submit: submitBindput } = useInput(text)

  const [state, setState] = useState({
    editable: true,
    editing: false,
    // value: text,
    className: className + 'sizer',
    options: {
      toggle: false,
      editors: ['input', 'textarea', 'richtext', 'markdown']
    },
    message: '',
  })


  const handleEdit = () => {

    console.log('editing:', state.editing)

    return (state.editable) ? (
      setState({ editing: !state.editing })
    ) : (
        setState({ message: 'Sorry This is Not Editiable' })
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();

    console.log('submit', bindput);
    setState({ editing: !state.editing, message: 'success' })
    submitBindput(e.target.value);
  }

  // console.log('👗 stringHolder: value/styles:', { state, styles })

  return (

    <div>
      {(!state.editing) ? (
        <p
          onClick={() => handleEdit()}
          className={state.className}
          style={{ ...styles }}
          editors={state.editors}
        >
          {bindput || children}
          <span>{state.message}</span>
        </p>

      ) : (
          <input
            type="text"
            {...bindBindput}
            onBlur={(e) => handleSubmit(e)}
          />
        )}

    </div>

  )
}
