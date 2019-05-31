import React, { useState, useEffect } from 'react'
import Twrap from '../../../utils/Twrap/Twrap';
import LinksComponent from './LinksComponent';
import axios from 'axios';

// AddResLinks is based on PlugForm useForm

const AddResLinks = () => {

  const [data, setData] = useState({ links: {} });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        'http://localhost:3000/resLinks/',
      )
      setData({ links: response.data[0].reactLinks })
    }
    fetchData()
  }, [])

  return (
    <Twrap
      title="resLinks"
      toggle={true}
      sources="n"
    >

      {/* {console.log('data')} */}

      {
        Object.values(data.links).map((item, i) => {
          return (
            <a
              key={i}
              href={item['href']}
              target="blank"
              rel="nofollow"
            >
              {item['linkName']}
            </a>
          )
        })
      }

      <LinksComponent />
    </Twrap>
  )
}

export default AddResLinks;


    // "https://www.robinwieruch.de/react-hooks-fetch-data/"
