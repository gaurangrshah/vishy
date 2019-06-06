import React from 'react'
import { Button } from 'reactstrap'
import LinksComponent from './LinksComponent';
import { useData } from '../../../utils/useData/useData'
import { useToggle } from '../../../utils/Toggle/useToggle'
// import { simpleRenderer } from '../../../layout/content/holder'

export const SetData = ({ endpoint = '', callback = null }) => {
  const { data } = useData(endpoint, callback);
  return (data) ? <LinksComponent links={data} /> : (
    // TODO: use new <stringHolder/> instead
    <p>
      waiting...
    </p>
  )
}


export const GetData = () => {
  const [toggle, handleToggle] = useToggle();
  console.log('🐀 GetData:CLICK.', { toggle })


  const endpoint1 = 'http://localhost:3000/reactLinks'
  const endpoint2 = "https://my-json-server.typicode.com/gaurangrshah/api-sandbox/reactLinks/";



  const handleFetch = (e) => {
    handleToggle(!toggle)
    console.log('🐀 GetData:CLICK.', { toggle })
    return toggle;
  }
  return (
    <ButtonComp1 clickHandler={handleFetch} toggle={toggle} endpoint1={endpoint1} />
  )
}


export const ButtonComp1 = ({ clickHandler, toggle, endpoint1, endpoint2, buttonText }) => (
  <> {/* TODO: 🚧  add select box for endpoints,  */}
    <Button onClick={(e) => clickHandler(e)}>
      {(toggle) ? "Unmount" : "Get Data"}
    </Button>
    {(toggle) ? (
      <SetData endpoint={endpoint1} />
    ) : null}
  </>
)
