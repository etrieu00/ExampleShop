import React from 'react';
import { ListGroup, Col, Row, Image } from 'react-bootstrap';

const AboutScreen = () => {
    return (
        <ListGroup>
            <ListGroup.Item>
                <Row >
                    <Col md={4} >
                        <Row className="justify-content-md-center">
                            <Image
                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png'
                                stretch
                                height={200} />
                        </Row>
                    </Col>
                    <Col >
                        <h3>Reactjs</h3>
                        <p>
                            Single page application for the front end.
                            Redux for page management.
                            Bootstrap for styling.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row className='my-3'>
                    <Col md={4}>
                        <Row className="justify-content-md-center">
                            <Image
                                src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg'
                                stretch
                                height={200} />
                        </Row>
                    </Col>
                    <Col >
                        <h3>Nodejs</h3>
                        <p>
                            Simple back end for serving data to the front
                            end and managing orders. Express is used alongside
                            with nodejs.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={4}>
                        <Row className="justify-content-md-center">
                            <Image
                                src='https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2017/01/mongodb.png?resize=780,408'
                                stretch
                                height={200} />
                        </Row>
                    </Col>
                    <Col >
                        <h3>Mongobd</h3>
                        <p>NoSql database is used to store all the data.</p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row >
                    <Col md={4}>
                        <Row className="justify-content-md-center">
                            <Image
                                src='https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Moby-logo.png?itok=sYH_JEaJ'
                                stretch
                                height={200} />
                        </Row>
                    </Col>
                    <Col >
                        <h3>Docker</h3>
                        <p>
                            Docker will be used to containerized the entire application.
                            Docker-swarm will be the orchestrator.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
                <Row>
                    <Col md={4}>
                        <Row className="justify-content-md-center">
                            <Image
                                src='https://symbols.getvecta.com/stencil_89/48_nginx-icon.4056e667e9.svg'
                                stretch
                                height={200} />
                        </Row>
                    </Col>
                    <Col >
                        <h3>nginx</h3>
                        <p>
                            Will be used as the reverse proxy.
                        </p>
                    </Col>
                </Row>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default AboutScreen;