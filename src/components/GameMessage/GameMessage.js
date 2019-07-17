import React, {Component} from "react";
import "./GameMessage.css"

class GameMessage extends Component {
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


    addAnimation = () => {
        if(this.state.message === 'correct'){
            return 'animated rubberBand'
        }else if(this.state.message === 'incorrect'){
            return 'animated wobble'
        }else{
            return '';
        }
    }

    updatedMessage = () => {
        if(this.state.message === 'correct'){
            return 'CORRECT!'
        }else if(this.state.message === 'incorrect'){
            return 'DUPLICATE CLICK. GAME OVER!'
        }else{
            return 'Click An Image To Begin';
        }
    }

    render(){
        return(
            <li
                className={`
                gameMessage 
                ${this.state.animating? this.addAnimation(): ""} 
                ${this.state.animating? this.state.message: "black"}`}
                id={`${this.state.message}`}
                onAnimationEnd={() => this.setState()}
            >
                {this.updatedMessage()}
            </li>
        );
    }
}

export default GameMessage;