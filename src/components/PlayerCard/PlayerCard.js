import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (
    <div 
        role="img" 
        aria-label="click item" 
        className={`playerCard ${props.animate? "animated pulse": ""}`}
        style={{ backgroundImage: `url("${props.image}")` }}
        onClick={() => props.handleClick(props.id)}
    >
    </div>
)

export default PlayerCard;