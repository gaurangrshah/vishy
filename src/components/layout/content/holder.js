import React, { useState } from 'react';
import { useInput } from '../../utils/useInput/useInput'
import { RenderAlert } from '../../utils/alerty/renderAlert';

// holder will hold specific bits of content and act on it.
// takes in children from props, text, will be the default value any styles as an object, additional ClassNames, as well as any attributes, currently we've got "tabindex" being applied, but not working??

// FIXME 🚧

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
      toggle: false, // testing for use to set toggle for renderAlert.
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

  const { options, message } = state; //extract options and message
  // console.log('options, message:', { options, message })


  const handleEdit = (e) => {
    e.target.focus(e) // sets focus when in edit mode.
    console.log('✏️ editing:', state.editing)

    return (state.editable) ? (
      setState({ ...state, editable: true, editing: !state.editing })
    ) : (
        setState({ ...state, message: { type: 'error', content: 'Sorry This is Not Editiable' } })
      )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.persist();
    // console.log('submit', bindput);

    setState({
      ...state,
      editable: true, editing: !state.editing, message: {
        type: 'success',
        content: 'submitted: '
      },
      options: {
        toggle: !options.toggle
      }
    })
    submitBindput(e.target.value);
    console.log('INPUT:SUBMIT', { state, message })
  }


  const keyPress = (e) => {
    /* no preventDefault on keypresslisteners */
    e.persist();
    if (e.keyCode === 13 || e.keyCode === '13') {
      console.log('enterPress', e.target.value)

      setState({
        ...state, editable: true, editing: !state.editing, options: {
          toggle: !options.toggle
        },
        message: {
          type: 'success',
          content: 'submitted: '
        }
      })

      submitBindput(e.target.value);
      console.log('INPUT:ENTER', { state, message })
    }
    return null
  }

  // console.log('👗 stringHolder: value/styles:', { state, styles })

  return (

    <PComponent
      inputValue={bindput}
      editing={state.editing}
      handleEdit={handleEdit}
      className={state.className}
      styles={styles}
      attrs={state.attributes}
      message={message.content}
      type={message.type}
      bindBindput={bindBindput}
      handleSubmit={handleSubmit}
      keyPress={keyPress}
      toggle={state.options.toggle}
      editors={state.options.editors}
    />

  )
}



/**
*
* @param {*} inputValue ={bindput}
* @param {*} editing ={state.editing}
* @param {*} handleEdit  ={handleEdit}
* @param {*} className ={state.className}
* @param {*} styles ={styles}
* @param {*} attrs ={state.attributes}
* @param {*} message ={message.content}
* @param {*} type ={message.type}
* @param {*} bindBindput ={bindBindput}
* @param {*} handleSubmit ={handleSubmit}
* @param {*} keyPress  ={keyPress}
* @param {*} toggle ={state.options.toggle}
* @param {*} editors ={state.options.editors}
* @param {*} {...children}
*
* @returns {*}
*/



export const PComponent = ({ inputValue, editing, handleEdit, editors, className, styles, attrs, message, type, bindBindput, handleSubmit, keyPress, toggle }, { ...children }) => (
  <>
    {(!editing) ? (
      /* TODO: extract pTag, rename PComponent, extract input, then use SimpleRenderer, to conditionally render. */

      <>
        <p
          onDoubleClick={(e) => handleEdit(e)}
          className={className}
          editors={editors}
          style={{ ...styles }}
          {...attrs}
        /* spreads out atrrs, namely trying to spread tabindex currently.  */
        >

          {inputValue || children}
        </p>

        <RenderAlert
          isOpen={toggle}
          message={message}
          type={type}
          inputValue={inputValue}
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



export const simpleRenderer = (condition, Comp1, Comp2) => {
  console.log('simpleRender:', { condition, Comp1, Comp2 })
  return (condition) ? (
    <Comp2 />
  ) : (
      <Comp1 />
    )
}
