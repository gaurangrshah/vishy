import React from 'react'
import LinksComponent from './LinksComponent';
import { useData } from '../../../utils/useData/useData'

// used to pull links from local server endpoint and supply them to <LinksComponent links={arr}/>
// uses useData utility to pull in data and maintain it.

// 🚧 need to update progress, but all working with inputted links saving to server.

const GetResLinks = () => {

  const endpoint = "http://localhost:3000/reactLinks/";
  const { data, updateData, callback } = useData(endpoint, null)
  // useData takes a callback, currently not using it, but just rendering it back.

  // console.log('adddata: ', { data, updateData, callback })

  // console.log('📜', { data })

  return (

    <LinksComponent
      links={data}
      // passing in the function directly, so that the result is returned as props.links
      updateLinks={updateData}
    // passing in updateData to see if we can work with data from linksComponent.
    />
  )
}

export default GetResLinks;

    // "https://www.robinwieruch.de/react-hooks-fetch-data/"
