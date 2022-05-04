import React from "react";
import {Container} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Cards.css";
import IndCard from "./IndCard";
import {utcConverter, dayConverter} from '../Utils/Converters.js';


const Cards = (props) => {
    const cardStorage = []

    if (typeof props.weatherDaily != "undefined" && props.weatherDaily.daily) {
        props.weatherDaily.daily.forEach((daily, index) => {
            if (index > 0 && index < 6) {
                cardStorage.push(
                    <IndCard key={index} utcConverter={utcConverter} dayConverter={dayConverter} daily={daily} />
                )
            }
        })
    }
    return (
        <div>
            <Container className="card-container">
                {cardStorage}
            </Container>
        </div>
    )
}



export default Cards;




