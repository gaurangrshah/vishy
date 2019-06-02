import { useState, useEffect } from "react";
import { useResp } from './useCatcher';
import axios from 'axios';

export const useData = (endpoint, callback, initialValue) => {
  const [data, setData] = useState(initialValue);
  // we've defaulted, links {} to an empty object here, but inital value can be passed in.
  const updateData = (newData) => setData(newData);

  // const [resp, updateResp] = useResp();
  useEffect(() => {
    console.log('data effect ran')
    const fetchData = async () => {

      console.log('fetching..🤞')

      const response = await axios(endpoint)
        .then(response => {
          console.log('success response', { response })
          // updateResp(response)
          // returns response after success,
          return response
        })
        .catch(err => {
          console.log('error response', { err })
          // updateResp(err)
        })
        .then(null)
      // if no error, then handles updateData
      updateData(response.data)
    }
    fetchData();
    // takes the response and sets the links value on the Data object.
    // callback();
    return () => {
      console.log('unmounting')
      // is this necessary?
    };
  }, [endpoint])

  // console.log('check data', { data })
  return { data, updateData, callback }
  // havent utilized callback, just retuning it back for now.
}
