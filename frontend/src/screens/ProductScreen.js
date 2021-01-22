import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Form, Carousel } from 'react-bootstrap';
import Loader from '../components/loaders/Loader';
import Message from '../components/messages/Message';
import { readProduct } from '../redux/actions/productActions';

const ProductScreen = ({ match, history }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const productDetails = useSelector(state => state.productRead);
    const { loading, error, product } = productDetails;
    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?quantity=${quantity}`);
    };

    useEffect(() => {
        dispatch(readProduct(match.params.id));
    }, [dispatch, match]);

    return (
        loading
            ? <Loader />
            : <>
                {error && <Message>{error}</Message>}
                <Link className='btn btn-light my-3' to='/shop'>Go Back</Link>
                <Row>
                    <Col md={8}>
                        <ListGroup variant='flush rounded'>
                            <ListGroup.Item>
                                <Carousel>
                                    {
                                        product.images.map((i, index) => (
                                            <Carousel.Item key={index} >
                                                <Row className="justify-content-md-center">
                                                    <Image className='md-auto' key={index} src={i} alt={product.name} stretch='true' />
                                                </Row>
                                            </Carousel.Item>
                                        ))
                                    }
                                </Carousel>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush rounded'>
                            <ListGroup.Item>
                                <h2>{product.name}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong>Price:</strong>
                                    </Col>
                                    <Col>
                                        $ {product.price}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong>Description:</strong>
                                    </Col>
                                    <Col>
                                        {product.description}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <strong>Total Price:</strong>
                                    </Col>
                                    <Col>
                                        <strong>$ {(product.price * quantity).toFixed(2)}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>Quantity</Col>
                                <Col>
                                    <Form.Control
                                        as='select'
                                        value={quantity}
                                        onChange={(e) => setQuantity(e.target.value)}>
                                        {[1, 2, 3, 4, 5].map(c => (
                                            <option key={c}> {c} </option>
                                        ))}
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className='btn-block btn-primary'
                                type='button'
                                onClick={addToCartHandler}>
                                Add to Cart
                        </Button>
                        </ListGroup.Item>
                    </Col>
                </Row>
            </>
    );
};

export default ProductScreen;