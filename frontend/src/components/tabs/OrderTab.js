import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup } from 'react-bootstrap';
const ConfirmOrderTab = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.shoppingCart);
    useEffect(() => {

    }, [dispatch, cart]);
    return (
        cart.length === 0
            ? <h1> nothing </h1>
            : <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col><h5>Item</h5></Col>
                        <Col><h5>Price</h5></Col>
                        <Col><h5>Count</h5></Col>
                    </Row>
                </ListGroup.Item>
                {cart.map(product => (
                    <ListGroup.Item key={product.id}>
                        <Row className="align-items-center">
                            <Col>
                                <Link
                                    className='text-dark'
                                    to={`/product/${product.id}`}
                                    key={product.id}>
                                    <h6>{product.name}</h6>
                                </Link>
                            </Col>
                            <Col>
                                <h6>$ {product.price}</h6>
                            </Col>
                            <Col>
                                <h6>{product.quantity}</h6>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
    );
}

export default ConfirmOrderTab
