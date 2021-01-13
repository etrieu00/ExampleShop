import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const HomeScreen = () => {
    return (
        <>
            <Jumbotron className='my-3'>
                <h1>Example Shop</h1>
                <p>
                    Welcome to Example Shop.
                    This webapp was created as a personal project to learn a couple new technologies.
                    The plan is to create a Single page web application with Reactjs.
                    The back end consists of nodejs and mongodb.
                    Nginx will be the reverse proxy.
                    Docker will be used to containerize the entire application.
                </p>
                <Link className='btn btn-primary my-3' to='/about'>Learn more...</Link>
            </Jumbotron>
        </>
    );
};

export default HomeScreen;