import React from "react";
import { Button } from 'reactstrap';
import { useInput } from '../utils/useInput/useInput';

// Basic HTTP Setter, no data store.
import { Setter } from '../utils/setter/setter';


export const LinkForm = (props) => {
  const { nextId } = props
  const { value: linkName, bind: bindlinkName, reset: resetlinkName } = useInput('');
  const { value: href, bind: bindHref, reset: resetHref } = useInput('');



  const handleSubmit = (e) => {
    e.preventDefault();
    // const endpoint = 'http://localhost:3000/reactLinks'
    const endpoint = 'https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/'
    const payload = { id: nextId, linkName, href }
    alert(`Submitting Name ${JSON.stringify(payload)}`);

    const payloadCallback = (res) => {
      //callback that gets called after success.
      console.log('then', { res })

    }

    Setter(endpoint, payloadCallback, payload)

  }


  return (
    <form onSubmit={(e) => {
      handleSubmit(e)
    }}>
      <label>
        id: {props.nextId || ''}
        {/* using math.random to generate a random num btw. 1 - 10, as a fallback */}
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
