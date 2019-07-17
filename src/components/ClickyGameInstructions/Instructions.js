import React from "react";
import { Jumbotron } from 'reactstrap';
import "./Instructions.css";

const Instructions = (props) => (
    <div className="jumbo">
        <Jumbotron>
            <h2>{props.message}</h2>
        </Jumbotron>
    </div>
);

export default Instructions
