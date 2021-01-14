import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, Button, Row, Col, Image } from 'react-bootstrap';
import Message from '../components/messages/Message';
import {
    addProductToCart,
    removeProductFromCart,
    // removeAllProductsFromCart,
} from '../redux/actions/shoppingActions';

const CartScreen = ({ match, history, location }) => {
    const productId = match.params.id;
    const quantityCount = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.shoppingCart);
    const { accountLogin } = useSelector(state => state.accountLogin);
    const checkoutHandler = () => {
        if (accountLogin) {

        } else {
            history.push('/profile/signin');
        }
    };

    const removeProductFromCartHandler = (id) => {
        dispatch(removeProductFromCart(id));
    };
    useEffect(() => {
        if (productId) {
            dispatch(addProductToCart(productId, quantityCount));
            history.push('/cart');
        }
    }, [dispatch, productId, quantityCount, accountLogin, history]);
    return (
        <Row>
            <Col md={8}>
                <h3>Shopping Cart</h3>
                {cart.length === 0
                    ? <Message variant='light'>Your cart is empty</Message>
                    : cart.map(product => (
                        <ListGroup.Item key={product.id}>
                            <Row className="align-items-center">
                                <Col xs={2} md={2}>
                                    <Image src={product.image} alt={product.name} fluid rounded />
                                </Col>
                                <Col xs={2} md={3}>
                                    <Link className='text-dark' to={`/product/${product.id}`} key={product.id}><h5>{product.name}</h5></Link>
                                </Col>
                                <Col xs={4} md={3}>
                                    <h5>$ {product.price}</h5>
                                </Col>
                                <Col xs={2} md={2}>
                                    <h5>{product.quantity}</h5>
                                </Col>
                                <Col xs={1} md={2}>
                                    <Button
                                        type='button'
                                        variant='danger'
                                        onClick={() => removeProductFromCartHandler(product.id)}>
                                        <i className='fas fa-trash' />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))
                }
            </Col>
            <Col md={4}>
                <ListGroup className='my-5 rounded' variant='flush'>
                    <ListGroup.Item>
                        <h5>Order Summary</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>
                            Subtotal: $ {cart.length !== 0
                                ? cart.map(item => item.price * item.quantity)
                                    .reduce((acc, cur) => acc + cur)
                                : 0}
                        </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>
                            Shipping Total: $ 10.00
                        </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>
                            Total: {cart.length !== 0
                                ? Number(cart.map(item => item.price * item.quantity)
                                    .reduce((acc, cur) => acc + cur) + 10)
                                    .toFixed(2)
                                : 0}
                        </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col className='m-auto' md={10}>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    onClick={checkoutHandler}>
                                    Proceed To Checkout
                                </Button>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup className='my-5 rounded' variant='flush'>
                    <ListGroup.Item>
                        <h5>Delivery Details</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col md={7}>
                                <strong>
                                    Estimate Delivery Date:
                                </strong>
                            </Col>
                            <Col md={5}>
                                10 days
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col md={7}>
                                <strong>
                                    Estimate Arriaval Date:
                                </strong>
                            </Col>
                            <Col md={5}>
                                Octobor 20, 2021
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
        </Row>
    );
};

export default CartScreen;