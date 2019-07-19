import React, {Component} from "react";
import "./Content.css"

class Message extends Component {
    state = {
        animating: false,
        message: ''
    }

    componentDidUpdate(prevProps) {
        let newState = {
            animating: true 
        }

        const {score, topScore} = prevProps;

        if(score === 0 && topScore === 0){
            newState.message = "";
        }else if(score !== 0 && topScore > 0){
            newState.message = "correct"
        }else{
            newState.message = "incorrect"
        }

        if (score !== this.props.score || this.state.message !== newState.message) {
            console.log(newState);
            this.setState(newState);
        }
    }


    startAnimation = () => {
        if(this.state.message === 'correct'){
            return 'animated pulse'
        }else if(this.state.message === 'incorrect'){
            return 'animated shake'
        }else{
            return '';
        }
    }

    cardClicked = () => {
        if(this.state.message === 'correct'){
            return 'CORRECT!'
        }else if(this.state.message === 'incorrect'){
            return 'DUPLICATE CLICK. GAME OVER!'
        }else{
            return 'Click A Player Card to Begin the Game.';
        }
    }

    render(){
        return(
            <li
                className={`
                display
                ${this.state.animating? this.startAnimation(): ""} 
                ${this.state.animating? this.state.message: "text"}`}
                id={`${this.state.message}`}
                onAnimationEnd={() => this.setState()}
            >
                {this.cardClicked()}
            </li>
        );
    }
}

export default Message;