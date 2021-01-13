import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/loaders/Loader';
import Message from '../components/messages/Message';
import Product from '../components/products/Product';
import { listAllProducts } from '../redux/actions/productActions';

const ShopScreen = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.productsList);
    const { loading, error, products } = productsList;

    useEffect(() => {
        dispatch(listAllProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Products</h1>
            { error && <Message> {error} </Message>}
            { loading
                ? <Loader />
                : <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            }
        </>
    );
};

export default ShopScreen;
