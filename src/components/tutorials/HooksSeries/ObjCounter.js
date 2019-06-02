import React, { useState } from 'react'

function ObjCounter() {
  // using object as the default value for name defined directly w/in useState
  const [name, setName] = useState({
    // here we can define the default properties and vales of name
    firstName: '',
    lastName: '',
    firstName2: '',
    lastName2: '',
  })

  return (
    <div>
      <p>in this implementation the state variable references an object = {`firstName: '', lastName: '' `}"  each property is getting reset, when one input starts writing over the other</p>
      <input type="text" value={name.firstName} onChange={e => setName({ firstName: e.target.value })} />
      <input type="text" value={name.lastName} onChange={e => setName({ lastName: e.target.value })} />
      <p> to visualize the state issue from the inputs this is the output of the name state variable:</p>

      <mark>name1: {`firstName:${name.firstName}, lastName:${name.lastName}`}</mark><br />

      <p> we can clearly see that when we type in one input we are essentially removing the other property from the state variable.</p>

      <p> The reason this happens: is that useState does not automatically merge the object for us. This is a key difference of setState in class components where the state object is merged when using setState. </p>

      <p>use the spread operator to manuall merge "...prevState, updatedState"</p>

      {/* using the spread operator to spread out prev name values then the relevant updates */}
      <input type="text" value={name.firstName2} onChange={e => setName({ ...name, firstName2: e.target.value })} />
      <input type="text" value={name.lastName2} onChange={e => setName({ ...name, lastName2: e.target.value })} /><br />

      <mark>name2: {`firstName2:${name.firstName2}, lastName2:${name.lastName2}`}</mark> <br />
      <p>using the spread operator to spread out the '...prevState' and manually merging our updates in-line with:</p> <br /><mark>onChange={`e => setName({...name, firstName: e.target.value})`}</mark> <br />
      <p>this issue/fix applies to class components as well, in cases where the shallow auto-merge may fail.</p>
    </div>
  )
}

export default ObjCounter


