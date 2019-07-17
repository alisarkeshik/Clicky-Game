import React from "react";
import { Jumbotron } from 'reactstrap';
import "./GameInstructions.css";

const GameInstructions = (props) => (
    <div className="jumbo">
        <Jumbotron>
            <h2 className=" animated fadeInDown instructions">{props.message}</h2>
        </Jumbotron>
    </div>
);

export default GameInstructions
