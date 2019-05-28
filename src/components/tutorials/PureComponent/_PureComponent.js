import React, { PureComponent } from 'react';


/*
  * Understanding Pure Components & When they should be used.
   -- difference between component class and pure component class
   --- Demo:    [reg component] <---  [Parent Component] --> [pure component]
        a containing parent component that can communicate with both siblings: reg & pure.

        must always return a new object or array

    Pure Components implement shouldComponentUpdate with a shallow props and state comparison.
    Shallow Comparison compares prevState with currentState and prevProps with currentProps
    Only when there is a difference in the comparison will the component re-render.

    NOTE: normal behavior is react is that when a parent re-renders, it will re-render each child as well, unless we return "false" from "shouldComponentUpdate". Pure Components only render once
    and by default are not re-rendered when the parent or any siblings re-render.

     Pure components prevent unnecessary re-renders and provide a performance boost in some cases.
*/


class PureComp extends PureComponent {
  // Pure components extend from the "PureComponent Class"
  render() {
    console.log('Pure render')
    // this component won't update after inital render
    return (
      <div>pureComp {this.props.name}</div>
    )
  }
}

export default PureComp;


/*
* Shallow Comparison
  - Primitive Types
      returns true of both items have the same value and are of the same type
      (ex: string: 'This Guy' --shallowcomparedto-- string: 'This Guy'  // returns true)

    - Complex Types
      returns true if both items reference the same exact object.
      (ex:

        Arrays:               Objects:
        var a = [1,2,3]       var a = {x: 1, y: 2 }
        var b = [1,2,3]       var b = {x: 1, y: 2 }
        var c = a             var c = a;


        Shallow Comparisons of either complex types:
        (a === b) // false  -- the values are the same, but they do not reference the same item.
        (a === c) // true   -- references the exact same object/item

      )
*/
