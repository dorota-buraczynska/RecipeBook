import React from 'react';

let cards = [
    {
        id: 0,
        bg: 'bg',
        img: 'img0',
        isTurnOver: false
    },
    {
        id: 1,
        bg: 'bg',
        img: 'img1',
        isTurnOver: false
    },
    {
        id: 2,
        bg: 'bg',
        img: 'img2',
        isTurnOver: false
    },
    {
        id: 3,
        bg: 'bg',
        img: 'img3',
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
            return <div onClick={this.handleOnClick}>{this.props.bg}</div>
        } else {
            return <div onClick={this.handleOnClick}>{this.props.img}</div>
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
            doubleCards: doubleCards
        };
        console.log(this.state.doubleCards)
    }

    turnOverCard = (card, index) => {
        let newState = this.state.doubleCards[index].isTurnOver;
        let tempArray = this.state.doubleCards;
        if (this.state.doubleCards[index].isTurnOver === false) {
            tempArray[index].isTurnOver = true;
            this.setState({
                doubleCards: tempArray
            })
        }else {
            tempArray[index].isTurnOver = false;
            this.setState({
                doubleCards: tempArray
            })
        }
    };

    render() {
        let cards = this.state.doubleCards.map((card, index) => {
            return <Card key={index} turnOverCard={card => this.turnOverCard(card, index)} img={card.img} bg={card.bg} isTurnOver={card.isTurnOver}/>
        });
        return <div>{cards}</div>
    }
}

class Game extends React.Component {
    render() {
        return <Board cards={cards}/>
    }
}

export {Game}