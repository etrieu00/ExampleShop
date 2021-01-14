import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
const BillingPaymentTab = () => {
    const [address, setAddress] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [county, setCounty] = useState('');
    const [country, setCountry] = useState('');
    const [zip, setZip] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <h3>Shipping Information</h3>
            <Form onSubmit={submitHandler}>
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
                    <Form.Label>Street Address Line2</Form.Label>
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
                <Button className='my-3' type='submit' variant='primary'>
                    Update information
                </Button>
            </Form >
        </>
    );
};

export default BillingPaymentTab;