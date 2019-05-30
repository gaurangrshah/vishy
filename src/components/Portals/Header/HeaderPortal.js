import React from 'react'
import PortalWrapper from '../PortalWrapper'
import LinksComponent from './LinksComponent/LinksComponent';
import linkRes from '../../../data/links-res.json';


const HeaderPortal = () => {
  return (
    <PortalWrapper>

      <ul style={{
        display: 'flex',
        justifyContent: 'space-between',
        listStyle: 'none'
      }}>

        <LinksComponent links={linkRes.resLinks.reactLinks} />

      </ul>

    </PortalWrapper >
  )
}

export default HeaderPortal
