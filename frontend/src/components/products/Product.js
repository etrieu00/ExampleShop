import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Product = ({ product }) => {
    return (
        <Card className='my-2 p-2 rounded ' text='dark'>
            <Card.Header as='h4'>
                <Link to={`/product/${product._id}`} className='text-dark'>
                    {product.name}
                </Link>
            </Card.Header>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.images[0]} variant='top' />
            </Link>
            <Card.Body className="mr-auto">
                <Card.Text as='h5' >
                    $ {product.price}
                </Card.Text>
                <Card.Text as='h6'>
                    <i className='fas fa-shopping-bag' /> {product.countStock}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
