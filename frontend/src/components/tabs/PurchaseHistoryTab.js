import React from 'react';
import { Badge, ListGroup, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../messages/Message';
const PurchaseHistoryTab = ({ purchases }) => {
    return (
        <>
            <h3>Purchase History</h3>
            {purchases
                ? <ListGroup variant='dark'>
                    {purchases.map(purchase => (
                        <LinkContainer to={`order/${purchase._id}`} >
                            <ListGroup.Item>
                                <Row>
                                    <Col md={6}>{purchase._id}</Col>
                                    <Col md={3}>$ {purchase.totalPrice.toFixed(2)}</Col>
                                    <Col md={3}>
                                        <Badge variant={purchase.delivered ? 'success' : 'danger'}>
                                            {purchase.delivered ? 'Delivered' : 'Not Delivered'}
                                        </Badge>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </LinkContainer>
                    ))}
                </ListGroup>
                : <Message variant='secondary'>No purchase history</Message>
            }
        </>
    );
};

export default PurchaseHistoryTab;