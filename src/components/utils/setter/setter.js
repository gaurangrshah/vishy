import { useState, useEffect } from 'react';
import axios from 'axios'

export const useSetter = (payload) => {
  console.log('inUseSetter')
  const [sendData, setSendData] = useState(payload || {
    response: '',
    error: '',
    success: '',
  })

  console.log('usesetted: ', { payload })

  const afterSubmit = () => {
    console.log('submitted')
  }
  useEffect(() => {
    let mount = true;

    if (mount) {
      const postData = async () => {
        console.log('settingResponseawat')

        // const endpoint = 'http://localhost:3000/reactLinks'
        const endpoint = 'https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks'
        const response = await axios.post(endpoint, payload)
          .then(resposne => response)
          .then(console.log('success'))
          .catch(err => console.log(err))
          .then(err => setSendData({ error: err }))
      }
      postData();
    }
    return () => {
      mount = false;

    }
  }, [sendData, setSendData, payload])

  return
}
