import React from 'react';
import { Nav, ListGroup, Tab, Row, Col } from 'react-bootstrap';
const PaymentTab = () => {
    return (
        <Tab.Container defaultActiveKey='paypal'>
            <Row>
                <h4>Select a payment method</h4>
            </Row>
            <Row className='my-2'>
                <Col md={4}>
                    <ListGroup variant='rounded'>
                        <ListGroup.Item >
                            <Nav variant='pills' className='flex-column'>
                                <Nav.Item>
                                    <Nav.Link
                                        id='paypal'
                                        eventKey='paypal'>
                                        Paypal
                            </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link
                                        id='credit'
                                        eventKey='credit'>
                                        Credit Card
                            </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey='paypal'>
                            <ListGroup>
                                <ListGroup.Item>
                                    eh
                                </ListGroup.Item>
                            </ListGroup>
                        </Tab.Pane>
                        <Tab.Pane eventKey='credit'>
                            Visa
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

        </Tab.Container>
    );
};

export default PaymentTab;
