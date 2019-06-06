import React from 'react';
import { RenderAlert } from '../../../utils/alerty/renderAlert';

export const StringHandler = ({ inputValue, editing, handleEdit, editors, className, styles, attrs, message, type, bindBindput, handleSubmit, keyPress, toggle }, { ...children }) => (
  <>
    {(!editing) ? (
      /* TODO:  extract input, then use SimpleRenderer, to conditionally render. */

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
