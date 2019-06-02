import React from 'react'
import HeaderPortalWrapper from '../HeaderPortalWrapper'
import LinksComponent from './LinksComponent/LinksComponent';
//🚦 import { useData } from '../../utils/useData/useData';
import linkRes from '../../../data/links-res.json';
// local linkstore for header component.

const HeaderPortal = () => {

  let links = Object.values(linkRes).map((links, i) => {
    console.log('headerlinks',
      links) //returns back an array, the first index is our array of links: aaray[0]
    return links
  })

  // 🚦 const endpoint = "http://localhost:3000/reactLinks/";
  //🚦  const { data, updateData } = useData(endpoint, null)

  //🚦  { console.log('portal', { data }) }
  // { console.log('portal', { links }) }


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

        <LinksComponent
          links={links[0]}
        //🚦  updateLinks={updateData}
        />

      </ul>

    </HeaderPortalWrapper >
  )
}

export default HeaderPortal
