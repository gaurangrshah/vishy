import React from 'react'
import { BoxSizer, Box } from '../../components/layout/boxes/BoxSizer'


const DoList = () => {
  return (
    <BoxSizer>
      <Box text={"Box 1"} styles={{ color: 'green' }} className={'sizer editable'} />
      <Box text={"Box 2"} styles={{ color: 'green' }} className={'sizer editable'} />
      <Box text={"Box 3"} styles={{ color: 'green' }} className={'sizer editable'} />
      <Box text={"Box 4"} styles={{ color: 'green' }} className={'sizer editable'} />
    </BoxSizer>
  )
}

export default DoList
