import React from "react";
import { Button } from 'reactstrap';
import { useInput } from '../utils/useInput/useInput';
import axios from 'axios'
// 🚧 check this and integrate setter
// import { useSetter } from '../utils/setter/setter';

export const LinkForm = (props) => {
  const { nextId } = props
  const { value: linkName, bind: bindlinkName, reset: resetlinkName } = useInput('');
  const { value: href, bind: bindHref, reset: resetHref } = useInput('');


  // const [sendData, setSendData] = useSetter()
  // console.log('usingData', { sendData })


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { id: props.nextId, linkName, href }
    const loaded = {

      id: 1, reactLinks: [{ ...payload }]

    }
    alert(`Submitting Name ${JSON.stringify(payload)}`);
    // setSendData({ ...sendData, payload })


    let mount = true;

    if (mount) {
      const postData = async () => {
        console.log('settingResponseawait')

        const endpoint = 'http://localhost:3000/reactLinks/'
        const response = await axios.post(endpoint, payload)
          // need to add header?!?
          .then(response => response)
          .then(console.log('success'))
          .catch(err => console.log(err))
        console.log(response);
        resetlinkName();
        resetHref();
        return response
      }
      postData();
    }
    return () => {
      mount = false;
    }


  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        id: {props.nextId}
        <input type="text" defaultValue={props.nextId} hidden />
      </label>

      <label>
        Link Name:
        <input type="text" {...bindlinkName} />
      </label>
      <label>
        href:
        <input type="text" {...bindHref} />
      </label>
      <Button type="submit" className="btn btn-lg">
        Add Link
      </Button>
    </form>
  );
}
