import React, { useState } from 'react';
import { Row, Col, Button, Tab, Nav, ListGroup } from 'react-bootstrap';
import ConfirmOrderTab from '../components/tabs/OrderTab';
import ShippingInformationTab from '../components/tabs/ShippingInformationTab';

const CheckoutScreen = () => {
    const tabs = ['order', 'shipping', 'payment', 'summary'];
    const [paid, setPaid] = useState(false);
    const [tab, setTab] = useState(paid ? 3 : 0);
    const [confirmed, setConfirmed] = useState([]);
    const [address, setAddress] = useState({});
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const confirmationHandler = () => {
        if (tab === 1) {
            setError(Object.keys(address).length === 0 ? 'Address required' : '');
            if (Object.keys(address).length !== 0) {
                setTab(tab + 1);
                setConfirmed(confirmed.indexOf(tabs[tab]) !== -1 ? [...confirmed] : [...confirmed, tabs[tab]]);
            }
        } else {
            setTab(tab + 1);
            setConfirmed(confirmed.indexOf(tabs[tab]) !== -1 ? [...confirmed] : [...confirmed, tabs[tab]]);
            setPaid(confirmed.length + 1 === 3 && tab === 2);
        }
    };

    const submitAddressHandler = (e, address) => {
        e.preventDefault();
        setAddress(address);
        setMessage('Address Information updated');
    };

    // const checkoutHandler = (e) => {
    //     e.preventDefault();
    // }

    return (
        <div>
            <Tab.Container
                defaultActiveKey={paid ? 'summary' : 'order'}
                activeKey={tabs[tab]}>
                <Row>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Checkout</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Nav variant='pills' className='flex-column' >
                                    <Nav.Item>
                                        <Nav.Link
                                            id='order'
                                            eventKey='order'
                                            onClick={() => setTab(0)}
                                            disabled={paid}>
                                            <strong>Confirm Order</strong>
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey='shipping'
                                            disabled={confirmed.indexOf('order') === -1 || paid}
                                            onClick={() => setTab(1)}>
                                            <strong>Shipping</strong>
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey='payment'
                                            disabled={confirmed.indexOf('shipping') === -1 || paid}
                                            onClick={() => setTab(2)}>
                                            <strong>Payment</strong>
                                        </Nav.Link>
                                        <Nav.Link
                                            eventKey='summary'
                                            disabled={confirmed.length !== 3}>
                                            <strong>Order Status</strong>
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </ListGroup.Item>
                            {paid
                                ? null
                                : <ListGroup.Item>
                                    <Button
                                        type='button'
                                        className='btn-block'
                                        onClick={(e) => confirmationHandler()}>
                                        Confirm
                                    </Button>
                                </ListGroup.Item>
                            }
                        </ListGroup>
                        <ListGroup className='my-3' variant='flush'>
                            <ListGroup.Item>
                                <h4>Summary</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Price</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Tax</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Shipping</strong>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Total Cost</strong>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={{ span: 6, offset: 1 }}>
                        <Tab.Content>
                            <Tab.Pane eventKey='order'>
                                <ConfirmOrderTab />
                            </Tab.Pane>
                            <Tab.Pane eventKey='shipping'>
                                <ShippingInformationTab
                                    addr={address}
                                    submitAddress={submitAddressHandler}
                                    message={message || error}
                                    variant={message ? 'success' : 'danger'} />
                            </Tab.Pane>
                            <Tab.Pane eventKey='payment'>
                                <h1>payment</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey='summary'>

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default CheckoutScreen;
