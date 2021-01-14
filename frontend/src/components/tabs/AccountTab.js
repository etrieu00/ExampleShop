import React, { useState } from 'react';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';

const AccountTab = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const submitHander = (e) => {
        e.preventDefault();
        if (password === password2) {

        } else {

        }
    };
    return (
        <>
            <h3>Account</h3>
            <Form onSubmit={submitHander}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='firstname'>
                            <Form.Label>First Name</Form.Label>
                            <FormControl
                                type='text'
                                placeholder='Enter First Name'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId='lastname'>
                            <Form.Label>Last Name</Form.Label>
                            <FormControl
                                type='text'
                                placeholder='Enter Last Name'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <FormControl
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>New Password</Form.Label>
                    <FormControl
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Form.Group controlId='password2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <FormControl
                        type='password'
                        placeholder='Re-enter Password'
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}>
                    </FormControl>
                </Form.Group>
                <Button className='my-3' type='submit' variant='primary'>
                    Update information
                </Button>
            </Form >
        </>
    );
};

export default AccountTab;
