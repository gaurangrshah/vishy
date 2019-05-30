import React from 'react'
import PortalWrapper from '../PortalWrapper'
import LinksComponent from './LinksComponent/LinksComponent';
import linkRes from '../../../data/links-res.json';


const HeaderPortal = () => {
  return (
    <PortalWrapper>

      <ul style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        listStyle: 'none',
        padding: '1em',
        width: '100vw',
        flexBasis: '0 1 40%'
      }}>

        <LinksComponent links={linkRes.resLinks.reactLinks} />

      </ul>

    </PortalWrapper >
  )
}

export default HeaderPortal
