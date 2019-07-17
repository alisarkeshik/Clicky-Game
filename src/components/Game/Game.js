import React, { Component } from "react";
import Container from "../Container";
import GameCard from "../GameCard";
import GameInstructions from "../GameInstructions";
import NavBar from "../NavBar";
import Footer from "../Footer"
import data from "../../cards.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click on each player's card to earn a point. Clicking on the same card twice ends the game. Good Luck!"
    };
    

    componentDidMount() {
        this.setState({ data: this.shuffleArray(this.state.data) });
    }

    shuffleArray = (data) => {
        return data.sort(function (a, b) { return 0.5 - Math.random() });
    }

    resetTheArray = newArray => {
        let resetData = data.map(element => ({ ...element, clicked: false }));
        return (this.shuffleArray(resetData));
    }

    rightGuess = newArray => {
        let newScore = this.state.score;
        newScore++;
        let newTopScore = Math.max(newScore, this.state.topScore);
        this.setState({
            data: this.shuffleArray(newArray),
            score: newScore,
            topScore: newTopScore,
            animation: "animation hinge"
        })
    }

    wrongGuess = newArray => {
        this.setState({
            data: this.resetTheArray(newArray),
            score: 0
        })
    }

    gameCardClick = id => {
        let guessedRight = false;
        const newArray = this.state.data.map(element => {
            if (element.id === id && !element.clicked) {
                element.clicked = true;
                guessedRight = true;
            }
            return element
        })
        if (guessedRight) {
            this.rightGuess(newArray)
        } else {
            this.wrongGuess(newArray);
        }
    }

    render() {
        return (
            <div className=" animated fadeIn">
                <NavBar score={this.state.score} topScore={this.state.topScore}></NavBar>
                <GameInstructions message={this.state.message}></GameInstructions>
                <Container>
                    {
                        this.state.data.map(element => (
                            <div className="animated rotateIn">
                                <GameCard
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    animate={!this.state.score && this.state.topScore}
                                    clicked={element.clicked}
                                    handleClick={this.gameCardClick}
                                ></GameCard>
                            </div>
                        ))
                    }
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Game;