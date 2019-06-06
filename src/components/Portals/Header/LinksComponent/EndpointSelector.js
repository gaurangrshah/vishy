import React, { useState } from 'react'

export const EndpointSelector = ({ endpoints, setEndpoint }) => {

  /* selected represents the value prop on the select tag, and will hold the selection option, which is being set onChange via submitHandler.  */
  const [selected, setSelected] = useState('')
  // console.log('SelectedEndpoint:', selected)

  const submitHandler = (e, val) => {
    e.preventDefault();
    e.persist();

    setSelected(e.target.value)
    // updates the value for the selected item
    setEndpoint(e.target.value)
    /* sets value from selected option to endpoint state in <GetData/> */
  }

  return (
    <select onChange={(e) => submitHandler(e)} value={selected}>
      {endpoints.map((item, i) => {
        return (
          <option id={i} key={i} value={item}>{item}</option>
        )
      })}
    </select>
  )
}


/**
* used by getData to map thru an array of endpoints =>
* populates the options fields.
* onChange, the values are updated to the 'selected' and the 'endpoint' (from GetData) values
*
* [EXTERNALPROPS]
* @param {*} props.endpoints    array of endpoints to be mapped.
* @param {*} props.setEndpoint  handler to send selected endpoint back to GetData -> SetData
*
* [INTERNALSTATE:]
* @param {*} selected           value from the currently selected field
* @param {*} setSelected        handler to update selected value onChange.
*
*[Handlers]
* @callback {*} submitHandler   fires select option onChange calls setEndpoint() && setSelected
*
* @returns {*} a set of mapped options, inside a select tag.
*
6/6/19 */
