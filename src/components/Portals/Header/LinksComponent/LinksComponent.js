import React from 'react'

const LinksComponent = ({ links }) => {
  return (
    (links) ? (
      links.map((link, index) => {
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
    ) : (
        null
      )
  )
}

export default LinksComponent
