import React from 'react';
import {RecipePage} from './reciepe-page.jsx';

let cards = [
    {
        id: 0,
        bg: 'bg',
        img: 'img0',
        title: 'obrazek 1',
        isTurnOver: false
    },
    {
        id: 1,
        bg: 'bg',
        img: 'img1',
        title: 'obrazek 2',
        isTurnOver: false
    },
    {
        id: 2,
        bg: 'bg',
        img: 'img2',
        title: 'obrazek 3',
        isTurnOver: false
    },
    {
        id: 3,
        bg: 'bg',
        img: 'img3',
        title: 'obrazek 4',
        isTurnOver: false
    },
    {
        id: 4,
        bg: 'bg',
        img: 'img4',
        title: 'obrazek 5',
        isTurnOver: false
    },
    {
        id: 5,
        bg: 'bg',
        img: 'img5',
        title: 'obrazek 6',
        isTurnOver: false
    },
    {
        id: 6,
        bg: 'bg',
        img: 'img6',
        title: 'obrazek 7',
        isTurnOver: false
    },
    {
        id: 7,
        bg: 'bg',
        img: 'img7',
        title: 'obrazek 8',
        isTurnOver: false
    }
];

class Card extends React.Component {

    handleOnClick = () => {
        if (typeof this.props.turnOverCard === 'function') {
            this.props.turnOverCard();
        }
    };

    render() {
        if (this.props.isTurnOver === false) {
            return <div style={{pointerEvents: this.props.pointerEvents}} className="game__card" onClick={this.handleOnClick}>{this.props.bg}</div>
        } else {
            return <div style={{pointerEvents: this.props.pointerEvents}} className="game__turnOverCard" onClick={this.handleOnClick}>{this.props.img}</div>
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        let cardsStates = [];
        for (let i = 0; i < cards.length; i++) {
            cardsStates.push(false, false);
        }

        let shuffle = a => {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            return a;
        };

        let doubleCards = [];
        this.props.cards.forEach(card => {
            doubleCards.push(card, Object.assign({}, card));

        });
        doubleCards = shuffle(doubleCards);

        this.state = {
            cardsTurnOverStates: cardsStates,
            doubleCards: doubleCards,
            statesArray: [],
            recipeTitle: '',
            recipeImg: '',
            display: 'none',
            pointerEvents: 'auto'
        };
    }

    hideRecipePage = () => {
        this.setState({
            display: 'none'
        })
    };

    turnOverCard = (card, index) => {
        let tempArray = this.state.doubleCards;
        let statesArray = this.state.statesArray;
        if (this.state.doubleCards[index].isTurnOver === false) {
            tempArray[index].isTurnOver = true;
            statesArray.push(index);
            this.setState({
                doubleCards: tempArray,
                statesArray: statesArray
            })
        }

        if (this.state.statesArray.length === 2) {
            let indexOne = this.state.statesArray[0];
            let indexTwo = this.state.statesArray[1];
            let idFirstCard = this.state.doubleCards[indexOne].id;
            let idSecondCard = this.state.doubleCards[indexTwo].id;

            if (idFirstCard !== idSecondCard) {
                this.setState({
                    pointerEvents: 'none'
                });
                setTimeout(() => {
                    this.state.doubleCards[indexOne].isTurnOver = false;
                    this.state.doubleCards[indexTwo].isTurnOver = false;
                    this.setState({
                        statesArray: [],
                        pointerEvents: 'auto'
                    });
                }, 2000)
            } else {
                setTimeout(() => {
                    this.state.doubleCards[indexOne].isTurnOver = true;
                    this.state.doubleCards[indexTwo].isTurnOver = true;
                    this.setState({
                        statesArray: [],
                        display: 'block',
                        recipeTitle: this.state.doubleCards[indexOne].title,
                        recipeImg: this.state.doubleCards[indexOne].img
                    });
                }, 3000)

            }
        }
    };


    render() {
        let cards = this.state.doubleCards.map((card, index) => {
            return <Card key={index} turnOverCard={card => this.turnOverCard(card, index)} img={card.img} bg={card.bg} isTurnOver={card.isTurnOver} pointerEvents={this.state.pointerEvents}/>
        });

        return <div>
            <RecipePage hideRecipePage={this.hideRecipePage} title={this.state.recipeTitle} img={this.state.recipeImg} isVisible={this.state.display}/>
            <div className="game__board">{cards}</div>
        </div>


    }
}

class Game extends React.Component {
    render() {
        return <div className="game">
            <Board cards={cards}/>
        </div>
    }
}

export {Game}