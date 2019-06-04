import React from 'react';

export default ({ renderArr, children, errorMsg }) => {
  return (renderArr) ? (
    <ul>
      {renderArr.map((item, i) => {
        return (
          <li key={item.id || i}>
            <span> {item.title}</span>
            <span>{item.body ? item.body : null}</span>
            <span>{children ? children : null}</span>
          </li>
        )

      })}
    </ul>
  ) : (
      <p>{errorMsg || "error displaying your data."} {console.log('errorRenderingArr', {errorMsg})}</p>
    )
}
