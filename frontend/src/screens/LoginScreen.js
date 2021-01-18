import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Form, Button, Row, Col, FormControl } from 'react-bootstrap';
import Message from '../components/messages/Message';
import { accountSignIn } from '../redux/actions/accountActions';
const LoginScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { accountLogin, error } = useSelector(state => state.accountLogin);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e) => {
        e.preventDefault()
        dispatch(accountSignIn({ email, password }));
    };

    useEffect(() => {
        if (accountLogin) {
            history.push('/');
        }
    }, [history, accountLogin]);

    return (
        <Container>
            {error && <Message>{error}</Message>}
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <h2>Sign in to ExampleShop</h2>
                    <Form onSubmit={loginHandler}>
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
                            <Form.Label>Password</Form.Label>
                            <FormControl
                                type='password'
                                placeholder='Enter Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}>
                            </FormControl>
                        </Form.Group>
                        <Button
                            type='submit'
                            variant='primary'>
                            Sign In
                        </Button>
                    </Form>
                    <Row className='py-5'>
                        <Col>
                            New Customer? <Link to='create' > Create Account</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginScreen;