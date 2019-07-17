import React, { Component } from "react";
import Container from "../Container";
import PlayerCard from "../PlayerCard";
import Instructions from "../ClickyGameInstructions";
import NavBar from "../NavBar";
import Footer from "../Footer"
import data from "../../cards.json";


class StartOfGame extends Component {
    state = {
        data,
        score: 0,
        topScore: 0,
        message: "Click on each player's card to earn a point. Clicking on the same card twice ends the game. Good Luck!"
    };
    

    componentDidMount() {
        this.setState({ data: this.rearrangeCardArray(this.state.data) });
    }

    rearrangeCardArray = (data) => {
        return data.sort(function (a, b) { return 0.5 - Math.random() });
    }

    ArrayReset = newArray => {
        let resetData = data.map(element => ({ ...element, clicked: false }));
        return (this.rearrangeCardArray(resetData));
    }

    correct = newArray => {
        let score = this.state.score;
        score++;
        let newTopScore = Math.max(score, this.state.score);
        this.setState({
            data: this.rearrangeCardArray(newArray),
            score: score,
            topScore: newTopScore,
            animation: "animation hinge"
        })
    }

    incorrect = newArray => {
        this.setState({
            data: this.ArrayReset(newArray),
            score: 0
        })
    }

    PlayerCardClick = id => {
        let correctClick = false;
        const newArray = this.state.data.map(element => {
            if (element.id === id && !element.clicked) {
                element.clicked = true;
                correctClick = true;
            }
            return element
        })
        if (correctClick) {
            this.correct(newArray)
        } else {
            this.incorrect(newArray);
        }
    }

    render() {
        return (
            <div className=" animated fadeIn">
                <NavBar score={this.state.score} topScore={this.state.topScore}></NavBar>
                <Instructions message={this.state.message}></Instructions>
                <Container>
                    {
                        this.state.data.map(element => (
                            <div className="animated rotateIn">
                                <PlayerCard
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    animate={!this.state.score && this.state.topScore}
                                    clicked={element.clicked}
                                    handleClick={this.gameCardClick}
                                ></PlayerCard>
                            </div>
                        ))
                    }
                </Container>
                <Footer />
            </div>
        );
    }
}

export default StartOfGame;