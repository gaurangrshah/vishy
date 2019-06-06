import React from 'react';

import { useData } from '../../../utils/useData/useData'
import LinksComponent from './LinksComponent';



export const SetData = ({ endpoint }) => {
  console.log('runSetData:', endpoint)
  const { data } = useData(endpoint);
  return (data) ? (
    <LinksComponent links={data} />
  ) : (
      <p>
        fetching...
      </p>
    )
}


/**
*TODO: use new StringHolder instead of LinksComponent.
*
* [ExternalProp]
* @param {*}  endpoint  endpoint is used to get data via useData,
*
* useData, gets passed the endpoint when then gets used to fetch the data.
* fetch returns a response, we grab response.data, and pass that as data into the LinksComponent
*
*
* @returns {*} LinksConponent links={data}
*/
