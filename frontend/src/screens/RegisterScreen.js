import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, FormControl } from 'react-bootstrap';
import { accountCreate } from '../redux/actions/accountActions';
const RegisterScreen = ({ history }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const dispatch = useDispatch();
    const { accountLogin } = useSelector(state => state.accountLogin);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password === password2) {
            const account = {
                firstName,
                lastName,
                email,
                password
            };
            dispatch(accountCreate(account));
        }
    };

    useEffect(() => {
        if (accountLogin) {
            history.push('/');
        }
    }, [history, accountLogin]);

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h2>Become one of us...</h2>
                    <Form onSubmit={submitHandler}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId='firstname'>
                                    <Form.Label>First Name</Form.Label>
                                    <FormControl
                                        type='name'
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
                                        type='name'
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
                            Create Account
                        </Button>
                    </Form>
                    <Row className='py-5'>
                        <Col>
                            Already have an account?  <Link to='signin' > Sign in</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default RegisterScreen;