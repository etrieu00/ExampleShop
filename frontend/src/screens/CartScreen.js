import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListGroup, Button, Row, Col } from 'react-bootstrap';
import Message from '../components/messages/Message';
import Loader from '../components/loaders/Loader';
import {
    addProductToCart,
    readCart,
    removeProductFromCart,
    removeAllProductsFromCart,
} from '../redux/actions/shoppingActions';

const CartScreen = ({ match, history, location }) => {
    const productId = match.params.id;
    const productCount = location.search ? Number(location.search.split('=')[1]) : 1;
    const dispatch = useDispatch();
    const { cart, success, loading, error } = useSelector(state => state.readFromCart);
    const { accountToken } = useSelector(state => state.accountLogin);
    const checkoutHandler = () => {
        if (accountToken) {
            history.push('/checkout');
        } else {
            history.push('/profile/signin');
        }
    };
    const removeProductFromCartHandler = (product) => {
        dispatch(removeProductFromCart(product));
    };
    const emptyCartHandler = () => {
        dispatch(removeAllProductsFromCart());
    };
    useEffect(() => {
        if (!accountToken) {
            history.push('/profile/signin');
        }
        if (productId) {
            dispatch(addProductToCart(productId, productCount));
            history.push('/cart');
        }
        if (!cart && !error) {
            dispatch(readCart());
        }
    }, [dispatch,
        accountToken,
        productId,
        productCount,
        cart,
        success,
        error,
        history]);
    return (
        <Row>
            <Col md={8}>
                <Row>
                    <Col md={9}>
                        <h3>Shopping Cart</h3>
                    </Col>
                    <Col md={3}>
                        <Button
                            type='button'
                            className='pull-right my-4'
                            disabled={!success || cart.length === 0}
                            variant='danger'
                            onClick={() => emptyCartHandler()}>
                            Empty Cart
                        </Button>
                    </Col>
                </Row>
                {loading && <Loader />}
                {!success || cart.length === 0
                    ? <Message variant='light'>Your cart is empty</Message>
                    : <ListGroup>
                        {cart.map((product, index) => (
                            <ListGroup.Item key={product._id}>
                                <Row className="align-items-center">
                                    <Col xs={1} md={1}>
                                        <h5>{index + 1}</h5>
                                    </Col>
                                    <Col xs={2} md={4}>
                                        <Link className='text-dark' to={`/product/${product._id}`} key={product._id}><h5>{product.name}</h5></Link>
                                    </Col>
                                    <Col xs={4} md={3}>
                                        <h5>$ {product.productPrice}</h5>
                                    </Col>
                                    <Col xs={2} md={2}>
                                        <h5>{product.productCount}</h5>
                                    </Col>
                                    <Col xs={1} md={2}>
                                        <Button
                                            type='button'
                                            variant='danger'
                                            onClick={() => removeProductFromCartHandler(product)}>
                                            <i className='fas fa-trash' />
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                }
            </Col>
            <Col md={4}>
                <ListGroup className='my-5 rounded' variant='flush'>
                    <ListGroup.Item>
                        <h5>Order Summary</h5>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <strong>
                            Subtotal: $ {success && cart.length !== 0
                                ? cart.map(item => item.productPrice * item.productCount)
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
                            Total: {success && cart.length !== 0
                                ? Number(cart.map(item => item.productPrice * item.productCount)
                                    .reduce((acc, cur) => acc + cur) + 10)
                                    .toFixed(2)
                                : 0}
                        </strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col className='m-auto' md={10}>
                                <Button
                                    disabled={success && cart.length === 0}
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