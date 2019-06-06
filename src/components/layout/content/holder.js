import React, { useState, useEffect } from 'react';
import { useInput } from '../../utils/useInput/useInput'
import { RenderAlert } from '../../utils/alerty/renderAlert';

// holder will hold specific bits of content and act on it.

export const StringHolder = ({ children = {}, text = '', styles = {}, className = '' }, { ...attrs }) => {
  const { value: bindput, bind: bindBindput, submit: submitBindput } = useInput(text)

  const [state, setState] = useState({
    editable: true,
    editing: false,
    // value: text,
    className: className + ' sizer',
    options: {
      toggle: false,
      editors: ['input', 'textarea', 'richtext', 'markdown'],
      attributes: { ...attrs }
    },
    message: '',
  })

  // console.log('🕉', state)

  const handleEdit = (e) => {
    e.target.focus(e)
    console.log('✏️ editing:', state.editing)

    return (state.editable) ? (
      setState({ editable: true, editing: !state.editing })
    ) : (
        setState({ message: 'Sorry This is Not Editiable' })
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();

    // console.log('submit', bindput);

    setState({ editable: true, editing: !state.editing, message: 'success' })
    submitBindput(e.target.value);

  }

  // console.log('👗 stringHolder: value/styles:', { state, styles })

  return (

    <>
      {(!state.editing) ? (
        <p
          onDoubleClick={(e) => handleEdit(e)}
          className={state.className}
          style={{ ...styles }}
          editors={state.editors}
          {...state.attributes}
        >
          {bindput || children}
          {(state.message) ? (
            <RenderAlert
              text="text"
              type='success'
            />
          ) : (
              null
            )
          }
        </p>

      ) : (
          <input
            type="text"
            {...bindBindput}
            onBlur={(e) => handleSubmit(e)}
          />
        )}

    </>

  )
}







export const SimpleRenderer = (condition, Comp1, Comp2) => {
  console.log('simpleRender:', { condition, Comp1, Comp2 })
  return (condition) ? (
    <Comp2 />
  ) : (
      <Comp1 />
    )
}

