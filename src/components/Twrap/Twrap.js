import React from 'react';
import Toggle from '../Toggle/Toggle';

const TestWrap = (props) => {
  return (
    <section className={`test test__${props.title}`}>
      <Toggle
        title={props.title}
      >
        <div className="container">
          <h3>{props.title}</h3>
          {props.children}<br />
          <a href={props.source}>{props.source}</a>
        </div>
      </Toggle>
    </section>
  )
}

export default TestWrap
