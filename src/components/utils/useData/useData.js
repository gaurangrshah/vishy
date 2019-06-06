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
    // console.log('useData: 🏔 ')
    if (endpoint) {
      const fetchData = async () => {

        // console.log('fetching..🤞')

        const response = await axios(endpoint)
          .then(response => {
            console.log('🎯success:response', { response })

            // returns response after success,
            return response
          })
          .catch(err => {
            console.log('error: 📛', { err })
          })
          .then(null)
        // if no error, then handles updateData
        updateData(response.data || null)
      }
      fetchData();
      // takes the response and sets the links value on the Data object.
      // callback();
      return () => {
        console.log('unmounting')
        // 🚧 unmounting seems to happen automatically after request, might be able to safely remove this... commenting out, if nothing breaks, then remove.
      };
    }
  }, [])

  // console.log('check data', { data })
  return { data, updateData, callback }
  // havent utilized callback, just retuning it back for now.
}
