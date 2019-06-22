import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { StringHolder } from '../content/holder';

export const BoxSizer = ({ children }) => {
  return (
    <Container className="box-sizer">
      <Row>
        {children}
      </Row>
    </Container>
  )
}

export const Box = ({ text, styles, className, tabindex }) => {
  return (
    <Col className=" box">
      <StringHolder text={text} styles={styles} className={className} tabindex={tabindex} />
    </Col>
  )
}

export const MapBoxes = (arr) => {
  return (
    <>
      {(Array.isArray(arr)) ? (arr.map((item, i) => {
        console.log(arr)
        return <Box key={i} text={item.linkName} styles={{ color: 'blue' }} className={'editable'} />
      }
      )) : () => {
        console.log('not an array')
        console.log('isArray?:', Array.isArray(arr))
        console.log('typeof?:', typeof arr)
        console.log('{links: }', arr)
      }}
    </>
  )
}
