import React from 'react'
import { Button } from 'reactstrap'
import { EndpointSelector } from './EndpointSelector'
import { SetData } from './SetData'

export const RenderFetcher = ({ clickHandler, endpoints, setEndpoint, endpoint }) => {
  // renders select boxes when there's no data, otherwise renders set data if an endpoint exists, or null.

  return (
    <>

      <EndpointSelector
        endpoints={endpoints}
        setEndpoint={setEndpoint}
      />
      {/* select dropdown containing available endpoints selection triggers fetch onChange and renders setData */}

      <Button onClick={(e) => clickHandler(e)}>
        {(endpoint) ? "Unmount" : "Get Data"}
      </Button>

      {/* toggles active when an truthy endpoint is passed in via props from EndpointSelector  */}
      {(endpoint) ? (
        <SetData
          endpoint={endpoint}
        />
      ) : null}
    </>
  )
}



/**
*
* @param {*}  clickHandler    * [func] triggers any clickHander passed in and passes back the event
* @param {*}  endpoints       * [arr]  endpoints available for the user to select from.
* @param {*}  setEndpoint     * [func] updates the endpoint which then triggers SetData
* @param {*}  endpoint        * [string] [url] final endpoint selected by user from EndpointSelector
*
* renders endpointSelector which populates options from the endpoints array.
* onChange (user selection) fires clickHandler which triggers (e) => handleFetch(e)  in GetData.
* which then updates the endpoint, which will then get passed back down, and upsed to trigger
* SetData
*
*
* @returns {*} renders SetData, when the "endpoint" value evaluates truthy
*/
