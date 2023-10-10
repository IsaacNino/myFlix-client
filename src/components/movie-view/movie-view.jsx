import "./movie-view.scss"; //import statement for movie-view.scss file
import React, {useEffect, useState } from "react"; //import statement for React and useState hook
import PropTypes from "prop-types"; //import statement for PropTypes
import { Button, Col, Row, Container, Card } from "react-bootstrap"; //import statement for Button, Col, Row, Container, and Card from react-bootstrap

export const MovieView = ({ movie, onBackClick }) => { // MovieView component
    return (
        <>
        <Container>
            <Row className ="justify-content-md-center">
                <Col className="col-lg-6">
                    <Card className="border-0 mx-auto">
                        <Card.Img
                            src={movie.ImagePath}
                            className="rounded-5"
                        />
                    </Card>
                </Col>
                <Col className="col-lg-6 mt-5 mt-md-0">
                    <Card className="border-0 h-10">
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="fs-3">
                                {movie.Title}
                            </Card.Title>
                            <Card.Text>
                                {movie.Description}
                            </Card.Text>
                            <Card.Title>
                                Genre: 
                            </Card.Title>
                            <Card.Text>                  
                                {movie.Genre.Name}
                            </Card.Text>
                            <Card.Title>
                                Director: 
                            </Card.Title>
                            <Card.Text>
                                {movie.Director.Name}
                            </Card.Text>
                        </Card.Body>
                        <button onClick={onBackClick} className="back-button">
                            Back
                        </button>
                    </Card>
                </Col>
            </Row>   
        </Container>
        </>
    );
}