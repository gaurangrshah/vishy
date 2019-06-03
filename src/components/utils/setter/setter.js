import axios from 'axios'

export const Setter = (endpoint, callback, payload) => {
  console.log('inUseSetter')

  // console.log('usesetted: ', { payload })

  let mount = true;

  if (mount) {
    const postData = async () => {
      console.log('settingResponseawait')

      const response = await axios.post(endpoint, payload)
        .then(response => response)
        .then(console.log('success'))
        .catch(err => console.log(err))

      console.log(response);

      payload = response;

      return payload
    }

    return postData().then(() => callback(payload)).then(() => console.log('success2'))
  }
}


// const endpoint = 'http://localhost:3000/reactLinks'
// const endpoint = 'https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/'

