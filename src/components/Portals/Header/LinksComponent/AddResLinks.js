import React from 'react'
import Twrap from '../../../utils/Twrap/Twrap';
import LinksComponent from './LinksComponent';
import { useData } from '../../../utils/useData/useData'

// used to pull links from local server endpoint and supply them to <LinksComponent links={arr}/>
// uses useData utility to pull in data and maintain it.

// 🚧 started work on rendering inputs in renderInput.js, but it needs logic to pull from server, possibly use: useData to do that.

const AddResLinks = () => {

  const endpoint = "http://localhost:3000/resLinks/";
  const { data, updateData, callback } = useData(endpoint, null, { links: {} })
  // useData takes a callback, currently not using it, but just rendering it back.

  // console.log('adddata: ', { data, updateData, callback })


  const RenderResLinks = (obj) => {
    //traverses object returns an arry of links, which then are used by <linkscomponent>
    let links = Object.values(obj)

    // console.log('links', { links })

    return links;
  }

  return (
    <Twrap
      title="resLinks"
      toggle={false}
      sources="n"
      msg="requires local server running"
    >

      <LinksComponent
        links={RenderResLinks(data.links)}
        // passing in the function directly, so that the result is returned to props.links
        updateLinks={updateData}
      // passing in updateData to see if we can work with data from linksComponent.
      />
    </Twrap>
  )
}

export default AddResLinks;


    // "https://www.robinwieruch.de/react-hooks-fetch-data/"
