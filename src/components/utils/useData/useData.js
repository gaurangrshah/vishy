import { useState, useEffect } from "react";
// import { useResp } from './useCatcher';
// 🚧 implement useCatcher for hooked error handling.
// using <GetData/> to fetch from.
import axios from 'axios';

export const useData = (endpoint, callback, initialValue) => {
  const [data, setData] = useState(initialValue);
  //removed default initialValue, value must be passed in.

  const updateData = (newData) => setData(newData);


  useEffect(() => {

    console.log('useData: 🏔 ')

    if (endpoint) {
      const fetchData = async () => {

        console.log('fetching..🤞')

        const response = await axios(endpoint)
          .then(response => {
            console.log('🎯success:response', { response })

            // returns response after success,
            return response
          })
          .catch(err => {
            console.log('useDataFetcherror: 📛', { err })
          })
          .then(null)

        // if no error, then handles updateData
        updateData(response.data || null)
      }
      fetchData();
      // takes the response and sets the links value on the Data object.
      // callback(); -- removed, callback, but can be used here if passed in as an arg.
      return () => {
        console.log('unmounting')
        // 🚧 unmounting seems to happen automatically after request, might be able to safely remove this... commenting out, if nothing breaks, then remove.
      };
    }
  }, [endpoint])
  // 🚧 testing behavior of passing endpoint as a dependency, comment logs after solved.
  // -- seems to work just fine, remove, after 6/6/19

  // console.log('check data', { data })
  return { data, updateData, callback }
  // havent utilized callback, just retuning it back for now.
}


/**
*
*
* [:]
* @arg {*}    endpoint      [string] [url] used to submit request
* @arg {*}    callback      [function]  currently unused, but can be used to act on data from parent
* @arg {*}    initialValue  [any] sets the intialValue of "data" if provided
*
* [InternalState:]
* @param {*}  data         defaults to empty, used as a placeholder for response.data
* @param {*}  setData      abstracted as updateData used to setData
* @param {*}  updateData   used to call setData, passes in a value which then updates 'data with
*
* @returns {*}
* 6/6/19 */
