import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import { accountRead, accountUpdate } from '../../redux/actions/accountActions';
import Message from '../messages/Message';
const AccountTab = () => {
    const dispatch = useDispatch();
    const { accountProfile } = useSelector(state => state.accountProfile);
    const { success, error } = useSelector(state => state.accountProfileUpdate);
    const [firstName, setFirstName] = useState(accountProfile ? accountProfile.firstName : '');
    const [lastName, setLastName] = useState(accountProfile ? accountProfile.lastName : '');
    const [email, setEmail] = useState(accountProfile ? accountProfile.email : '');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState(success);
    const [updateError, setUpdateError] = useState(false);
    const [mismatchPassword, setMismatchPassword] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password === password2) {
            if (mismatchPassword) {
                setMismatchPassword(false);
            }
            dispatch(accountUpdate({
                firstName,
                lastName,
                email,
                password,
            }));
        } else if (password !== password2) {
            setMismatchPassword(true);
            setUpdateSuccess(false);
        } else {
            dispatch(accountUpdate({
                firstName,
                lastName,
                email,
            }));
        }
    };

    useEffect(() => {
        if (accountProfile) {
            setFirstName(accountProfile.firstName);
            setLastName(accountProfile.lastName);
            setEmail(accountProfile.email);
            setUpdateError(error);
            setUpdateSuccess(success);
        } else {
            dispatch(accountRead());
        }
    }, [dispatch, accountProfile]);

    return (
        <>
            <h3>Account</h3>
            {mismatchPassword && <Message>Passwords do not match</Message>}
            {updateError && <Message>{updateError}</Message>}
            {updateSuccess && <Message variant='success'>Account information updated</Message>}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='firstname'>
                            <Form.Label>First Name</Form.Label>
                            <FormControl
                                required
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
                                required
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
                        required
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
