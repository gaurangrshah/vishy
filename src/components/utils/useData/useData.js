import { useState, useEffect } from "react";
import axios from 'axios';

export const useData = (endpoint, callback, initialValue) => {
  const [data, setData] = useState(initialValue);
  // we've defaulted, links {} to an empty object here, but inital value can be passed in.
  const updateData = (data) => setData(data);

  useEffect(() => {
    console.log('data effect ran')
    const fetchData = async () => {

      // console.log('fetching..')

      const response = await axios(endpoint)
      // creates a response after success, then handles updateData
      updateData({ links: response.data[0].reactLinks })
      // takes the response and sets the links value on the Data object.

      // console.log('check data')
    }
    fetchData();
    // callback();
    return () => {

      // is this necessary?
    };
  }, [endpoint])

  return { data, updateData, callback }
  // havent utilized callback, just retuning it back for now.
}
