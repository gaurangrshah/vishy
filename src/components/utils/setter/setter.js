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

        const endpoint = 'https://localhost:3000/reactLinks'
        const response = await axios.post(endpoint, payload)
          // need to add header?!?
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
