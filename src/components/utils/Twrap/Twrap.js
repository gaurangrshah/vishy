import React from 'react';
import Toggle from '../Toggle/Toggle';
import Source from './Source/Source';


const Twrap = (props) => {

  return (
    <section className={`test test__${props.title}`}>
      <Toggle
        title={props.title}
        toggle={props.toggle}
      >
        <div className="container">
          <h3>{props.title}</h3>
          {props.children}<br />
          {(props.msg) ? <p>{props.msg}</p> : null }
          {(props.source) ? <Source title={props.title} source={props.source} /> : <mark>Sorry no Sources Found</mark>}
        </div>
      </Toggle>
    </section>
  )
}

export default Twrap
