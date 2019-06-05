import React from "react";
import { Button } from 'reactstrap';
import { useInput } from '../utils/useInput/useInput';

// Basic HTTP Setter, no data store.
import { Setter } from '../utils/setter/setter';


export const LinkForm = (props) => {
  const { nextId } = props
  const { value: linkName, bind: bindlinkName, reset: resetlinkName } = useInput('');
  const { value: href, bind: bindHref, reset: resetHref } = useInput('');


  console.log('shh', { resetlinkName, resetHref });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const endpoint = 'http://localhost:3000/reactLinks'
    const endpoint = 'https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/'
    // endpoints can be built up, then passed in to Setter() as the first arg.

    const payload = { id: nextId, linkName, href }
    //prepare the payload to match api
    alert(`Submitting Name ${JSON.stringify(payload)}`);
    //alert successful payload.

    const payloadCallback = (res) => {
      //callback that gets fires after Setter() returns success.then => callback(payload)
      console.log('then', { res })

    }

    Setter(endpoint, payloadCallback, payload)
    // calling setter which returns a callback with the payload, that we then log out above via payloadCallback();

  }


  return (
    <form onSubmit={(e) => {
      handleSubmit(e)
    }}>
      <label>
        {/* current nextId gets passed in via props, from <linkscomponent/> */}
        id: {props.nextId || Math.floor(Math.random(10, 20) * 10) + 1 || ''}
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
