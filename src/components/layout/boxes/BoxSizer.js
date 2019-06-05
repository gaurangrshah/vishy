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

export const Box = ({ text, styles, className }) => {
  return (
    <Col className=" box">
      <StringHolder text={text} styles={styles} className={className} />
    </Col>
  )
}
