import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Tab, Nav, ListGroup } from 'react-bootstrap';
import ConfirmOrderTab from '../components/tabs/OrderTab';
import ShippingInformationTab from '../components/tabs/ShippingInformationTab';
import { readShippingInfo, updateShippingInfo } from '../redux/actions/shoppingActions';
import PaymentTab from '../components/tabs/PaymentTab';

const CheckoutScreen = () => {
    const dispatch = useDispatch();
    const { shippingInfo } = useSelector(state => state.shippingInfo);
    const tabs = ['Order', 'Shipping', 'Payment', 'Status'];
    const [paid, setPaid] = useState(false);
    const [tab, setTab] = useState(paid ? 3 : 0);
    const [confirmed, setConfirmed] = useState([]);
    const [address, setAddress] = useState(shippingInfo);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const confirmationHandler = () => {
        if (tab === 1) {
            setError(!address || Object.keys(address).length === 0 ? 'Address required' : '');
            if (address && Object.keys(address).length !== 0) {
                setTab(tab + 1);
                setConfirmed(confirmed.indexOf(tabs[tab]) !== -1 ? [...confirmed] : [...confirmed, tabs[tab]]);
            }
        } else {
            setTab(tab + 1);
            setConfirmed(confirmed.indexOf(tabs[tab]) !== -1 ? [...confirmed] : [...confirmed, tabs[tab]]);
            setPaid(confirmed.length + 1 === 3 && tab === 2);
        }
    };

    useEffect(() => {
        if (shippingInfo) {
            setAddress(shippingInfo);
        } else {
            dispatch(readShippingInfo());
        }
    }, [dispatch, shippingInfo]);

    const submitAddressHandler = (e, address) => {
        e.preventDefault();
        dispatch(updateShippingInfo(address));
        setMessage('Address Information updated');
    };

    return (
        <Tab.Container
            defaultActiveKey={paid ? 'Status' : 'Order'}
            activeKey={tabs[tab]}>
            <Row>
                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{tabs[tab]}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Nav variant='pills' className='flex-column' >
                                <Nav.Item>
                                    <Nav.Link
                                        id='Order'
                                        eventKey='Order'
                                        onClick={() => setTab(0)}
                                        disabled={paid}>
                                        <strong>Confirm Order</strong>
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey='Shipping'
                                        disabled={confirmed.indexOf('Order') === -1 || paid}
                                        onClick={() => setTab(1)}>
                                        <strong>Shipping</strong>
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey='Payment'
                                        disabled={confirmed.indexOf('Shipping') === -1 || paid}
                                        onClick={() => setTab(2)}>
                                        <strong>Payment</strong>
                                    </Nav.Link>
                                    <Nav.Link
                                        eventKey='Status'
                                        disabled={confirmed.length !== 3}>
                                        <strong>Order Status</strong>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </ListGroup.Item>
                        {paid || tab >= 2
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
                        <Tab.Pane eventKey='Order'>
                            <ConfirmOrderTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey='Shipping'>
                            <ShippingInformationTab
                                addr={shippingInfo}
                                submitAddress={submitAddressHandler}
                                message={message || error}
                                variant={message ? 'success' : 'danger'} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='Payment'>
                            <PaymentTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey='Status'>

                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default CheckoutScreen;
