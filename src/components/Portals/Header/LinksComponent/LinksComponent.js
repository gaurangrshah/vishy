import React from 'react'

export const mapLinks = (arr) => {
  const linked = arr.map((link, index) => {

    return (
      <li
        key={index}
      >
        <a
          href={link.href}
          className="app-link"
          target="blank"
          rel="noopener noreferrer"
        >
          {link.linkName}
        </a>
      </li>
    )
  })
  return linked
}

const LinksComponent = ({ links }) => {
  return (
    (links) ? (
      mapLinks(links)
    ) : (
        null
      )
  )
}

export default LinksComponent
