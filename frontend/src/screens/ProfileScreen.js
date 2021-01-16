import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Nav, Tab, Row, Col } from 'react-bootstrap';
import AccountTab from '../components/tabs/AccountTab';
import ShippingInformationTab from '../components/tabs/ShippingInformationTab';
import NotificationTab from '../components/tabs/NotificationTab';
import PurchaseHistoryTab from '../components/tabs/PurchaseHistoryTab';
import { updateShippingInfo } from '../redux/actions/shoppingActions';
const ProfileScreen = ({ history }) => {
    const dispatch = useDispatch();
    const { accountLogin } = useSelector(state => state.accountLogin);
    const { success } = useSelector(state => state.shippingInfoUpdate);
    useEffect(() => {
        if (accountLogin) {

        } else {
            history.push('/profile/signin');
        }
    }, [history, dispatch, accountLogin, success]);

    const submitAddressHandler = (e, address) => {
        e.preventDefault();
        dispatch(updateShippingInfo(address));
    };

    return (
        <Tab.Container defaultActiveKey='account' >
            <Row>
                <Col sm={3}>
                    <h3><i className='fa fa-cogs' /> Settings</h3>
                    <Nav variant='pills' className='flex-column'>
                        <Nav.Item>
                            <Nav.Link eventKey='account'>Account</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='notifications'>Notifications</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='history'>Purchase history</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='shipping'>Shipping Information</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={{ span: 6, offset: 1 }}>
                    <Tab.Content>
                        <Tab.Pane eventKey='account'>
                            <AccountTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey='notifications'>
                            <NotificationTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey='shipping'>
                            <ShippingInformationTab
                                variant={success && 'success'}
                                message={success && 'Address Information Updated'}
                                submitAddress={submitAddressHandler} />
                        </Tab.Pane>
                        <Tab.Pane eventKey='history'>
                            <PurchaseHistoryTab />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
};

export default ProfileScreen;
