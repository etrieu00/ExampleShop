import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import Message from '../messages/Message';
import { readShippingInfo } from '../../redux/actions/shoppingActions';
const ShippingInformationTab = ({ submitAddress, message, variant }) => {
    const dispatch = useDispatch();
    const { shippingInfo } = useSelector(state => state.shippingInfo);
    const { success } = useSelector(state => state.shippingInfoUpdate);
    const [address, setAddress] = useState(shippingInfo ? shippingInfo.address : '');
    const [address2, setAddress2] = useState(shippingInfo ? shippingInfo.address2 : '');
    const [city, setCity] = useState(shippingInfo ? shippingInfo.city : '');
    const [county, setCounty] = useState(shippingInfo ? shippingInfo.county : '');
    const [country, setCountry] = useState(shippingInfo ? shippingInfo.country : '');
    const [zip, setZip] = useState(shippingInfo ? shippingInfo.zip : '');

    useEffect(() => {
        if (shippingInfo) {
            setAddress(shippingInfo.address);
            setAddress2(shippingInfo.address2);
            setCity(shippingInfo.city);
            setCounty(shippingInfo.county);
            setCountry(shippingInfo.country);
            setZip(shippingInfo.zip);
        } else {
            dispatch(readShippingInfo());
        }
    }, [dispatch, shippingInfo, success]);

    return (
        <>
            <h3>Shipping Information</h3>
            {message && <Message variant={variant}>{message}</Message>}
            <Form onSubmit={(e) => submitAddress(e, { address, address2, city, county, country, zip })}>
                <Form.Group controlId='address'>
                    <Form.Label>Street Address</Form.Label>
                    <FormControl
                        required
                        type='text'
                        placeholder='Enter Street Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Form.Group controlId='address2'>
                    <Form.Label>Street Address Line 2</Form.Label>
                    <FormControl
                        type='text'
                        placeholder='Enter Street Address Line 2'
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='city'>
                            <Form.Label>City</Form.Label>
                            <FormControl
                                required
                                type='text'
                                placeholder='Enter City'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId='state'>
                            <Form.Label>State</Form.Label>
                            <FormControl
                                required
                                type='text'
                                placeholder='Enter State / Province'
                                value={county}
                                onChange={(e) => setCounty(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='zip'>
                            <Form.Label>Postal / Zip code</Form.Label>
                            <FormControl
                                required
                                type='text'
                                placeholder='Enter Postal / Zip Code'
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId='country'>
                            <Form.Label>Country</Form.Label>
                            <FormControl
                                required
                                type='text'
                                placeholder='Enter Country'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                </Row>
                <Button
                    className='my-3'
                    type='submit'
                    variant='primary'>
                    Update information
                </Button>
            </Form >
        </>
    );
};

ShippingInformationTab.defaultProps = {
    message: '',
};
export default ShippingInformationTab;