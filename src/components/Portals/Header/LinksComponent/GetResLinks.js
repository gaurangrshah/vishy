import React from 'react'
import LinksComponent from './LinksComponent';
import { useData } from '../../../utils/useData/useData'

// used to pull links from local server endpoint and supply them to <LinksComponent links={arr}/>
// uses useData utility to pull in data and maintain it.


const GetResLinks = ({ endpoint }) => {


  // const endpoint = "https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/";
  const { data } = useData(endpoint, null)
  // useData takes a callback, currently not using it, but just rendering it back.

  // console.log('📜', { data, updateData })

  return (

    <LinksComponent
      links={data}
    // passing in the function directly, so that the result is returned as props.links
    // updateLinks={updateData}
    // passing in updateData to see if we can work with data from linksComponent.
    />
  )
}

export default GetResLinks;





/**
*TODO: remove this component in favor of manual links fetching from <GetData/>
*
*[externalprops]
*@param {*}     endpoint  [string] [url]
*
*
*[internalstate]
*@constant {*}  data      [arr] placeholder for the response returned from calling useData(endpoint)
*@callback {*}  useData   [func] abstracted function used to update the data from the request.
* * removed instantiating useData, as it was not being utilized.
* used to fetch data from any endpoint passed in via props, then calls useData(endpoint)
* which returns a response, when we then take and udateData(response.data)
* which is then available via "data"
*
*
* @returns {*}  LinksComponent={data}

* "https://www.robinwieruch.de/react-hooks-fetch-data/"
* 6/6/19 */
