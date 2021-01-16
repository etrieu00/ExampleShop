import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import Message from '../messages/Message';
const ShippingInformationTab = ({ submitAddress, addr, message, variant }) => {
    const [address, setAddress] = useState(addr.address ? addr.address : '');
    const [address2, setAddress2] = useState(addr.address2 ? addr.address2 : '');
    const [city, setCity] = useState(addr.city ? addr.city : '');
    const [county, setCounty] = useState(addr.county ? addr.county : '');
    const [country, setCountry] = useState(addr.country ? addr.country : '');
    const [zip, setZip] = useState(addr.zip ? addr.zip : '');

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
    addr: {},
    message: '',
};
export default ShippingInformationTab;