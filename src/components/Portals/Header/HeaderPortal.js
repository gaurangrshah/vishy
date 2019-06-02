import React from 'react'
import HeaderPortalWrapper from '../HeaderPortalWrapper'
import LinksComponent from './LinksComponent/LinksComponent';
import linkRes from '../../../data/links-res.json';


const HeaderPortal = () => {

  let links = Object.values(linkRes).map((links, i) => {
    console.log('headerlinks',
      links)
    return links
  })

  { console.log('portal', { links }) }


  return (
    <HeaderPortalWrapper>
      <ul style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        listStyle: 'none',
        padding: '1em',
        width: '100vw',
        flexBasis: '0 1 40%'
      }}>

        <LinksComponent links={links[0]} />

      </ul>

    </HeaderPortalWrapper >
  )
}

export default HeaderPortal
