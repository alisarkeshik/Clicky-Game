import React from "react";
import './NavBar.css';
import DisplayMessage from '../ClickyGameContent';

const Navbar = (props) => {
    return(
        <div className='header'>
            <ul>
                <li><h2 className='title animated shake'>NB 90's Clicky Game</h2></li>
                <DisplayMessage score={props.score} topScore={props.topScore} />
                <li id='score'> Current Score: {props.score}</li> <li> | Your Top Score: {props.topScore}</li>
            </ul>
        </div>
    )
}

export default Navbar;