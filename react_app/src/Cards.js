import React from "react";
import { Card, CardBody, CardText, CardTitle, Fade, Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";
import './Fontawesome/all.css';
import TextForCards from "./TextForCards";


const Cards = (props) => {
    console.log(props)
    return (
        <div>
            <Container className="card-container">
                <Row>
                    <Col>
                        <Card key="firstCard"
                            tabIndex={0}
                            onClick={() => props.cardOneState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>Monday</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>72&#176;F</p></center>
                                </div>
                                <Fade in={props.fade1} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={1} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="secondCard"
                            tabIndex={0}
                            onClick={() => props.cardTwoState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>Tuesday</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>72&#176;F</p></center>
                                </div>
                                <Fade in={props.fade2} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={2} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="thirdCard"
                            tabIndex={0}
                            onClick={() => props.cardThreeState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>Wednesday</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>72&#176;F</p></center>
                                </div>
                                <Fade in={props.fade3} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={3} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="fourthCard"
                            tabIndex={0}
                            onClick={() => props.cardFourState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>Thursday</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>72&#176;F</p></center>
                                </div>
                                <Fade in={props.fade4} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={4} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card key="fifthCard"
                            tabIndex={0}
                            onClick={() => props.cardFiveState()}>
                            <CardBody>
                                <CardTitle>
                                    <center>Friday</center>
                                    <span id="forecast-icon">
                                        <center><i className="fas fa-cloud fa-2x"></i></center>
                                    </span>
                                </CardTitle>
                                <div>
                                    <center><p>72&#176;F</p></center>
                                </div>
                                <Fade in={props.fade5} className="my-2">
                                    <CardText>
                                        <TextForCards cardNum={5} />
                                    </CardText>
                                </Fade>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}



export default Cards;