import React, { useState } from 'react';
import { useInput } from '../../utils/useInput/useInput'
import { RenderAlert } from '../../utils/alerty/renderAlert';

// holder will hold specific bits of content and act on it.
// takes in children from props, text, will be the default value any styles as an object, additional ClassNames, as well as any attributes, currently we've got "tabindex" being applied, but not working??
export const StringHolder = ({ children = {}, text = '', styles = {}, className }, { ...attrs }) => {
  const { value: bindput, bind: bindBindput, submit: submitBindput } = useInput(text)
  //bindput assigned as value for the input.

  const [state, setState] = useState({
    // local state for this component.
    editable: true, // if true, content will be editable, if false will show a message.
    editing: false, // will toggle when editing mode is on.
    className: className + ' sizer',
    // adds sizer to the classNames list
    options: {
      toggle: false, // unused currently
      editors: ['input', 'textarea', 'richtext', 'markdown'], // unused currently
      attributes: { ...attrs } // stores attributes that get passed in.
    },
    message: { // a catch all for any and all messages that need to be displayed
      // all messages are rendered via <RenderAlert/>
      type: '',
      content: '',
    },
  })

  // console.log('🕉', state)

  const handleEdit = (e) => {
    e.target.focus(e) // sets focus when in edit mode.
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

    setState({ editable: true, editing: !state.editing, message: { type: 'success', content: 'saved: ' } })
    submitBindput(e.target.value);
  }

  const keyPress = (e) => {
    /* no preventDefault on keypresslisteners */
    e.persist();
    if (e.keyCode == 13) {
      console.log('enterPress', e.target.value)
      setState({ editable: true, editing: !state.editing, message: { type: 'success', content: 'saved: ' } })
      submitBindput(e.target.value);
    }
    return null
  }

  // console.log('👗 stringHolder: value/styles:', { state, styles })

  return (

    <PComponent
      value={bindput}
      editing={state.editing}
      handleEdit={handleEdit}
      className={state.className}
      styles={styles}
      attrs={state.attributes}
      message={state.message}
      // type={state.message.type}
      bindBindput={bindBindput}
      handleSubmit={handleSubmit}
      keyPress={keyPress}
    />

  )
}



export const PComponent = ({ value, editing, handleEdit, className, styles, attrs, message, type, bindBindput, handleSubmit, keyPress }, { ...children }) => (
  <>
    {(!editing) ? (
      <>
        <p
          onDoubleClick={(e) => handleEdit(e)}
          className={className}
          // editors={state.options.editors}
          style={{ ...styles }}
          {...attrs}
        >
          {value || children}

        </p>
        <RenderAlert
          message={message.content + value}
          type={message.type}
        />
      </>
    ) : (
        <input
          type="text"
          {...bindBindput}
          onBlur={(e) => handleSubmit(e)}
          onKeyDown={(e) => keyPress(e)}
        />
      )}

  </>
)



export const SimpleRenderer = (condition, Comp1, Comp2) => {
  console.log('simpleRender:', { condition, Comp1, Comp2 })
  return (condition) ? (
    <Comp2 />
  ) : (
      <Comp1 />
    )
}
