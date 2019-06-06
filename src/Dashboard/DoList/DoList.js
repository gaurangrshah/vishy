import React from 'react'
import { BoxSizer, Box } from '../../components/layout/boxes/BoxSizer'


const DoList = () => {
  return (
    <BoxSizer>
      <Box text={"Box 1"} styles={{ color: 'green' }} className={'editable'} tabindex='1' />
      <Box text={"Box 2"} styles={{ color: 'green' }} className={'editable'} tabindex='2' />
      <Box text={"Box 3"} styles={{ color: 'green' }} className={'editable'} tabindex='3' />
      <Box text={"Box 4"} styles={{ color: 'green' }} className={'editable'} tabindex='4' />
    </BoxSizer>
  )
}

export default DoList
