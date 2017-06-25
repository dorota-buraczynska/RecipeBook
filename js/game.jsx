import React from 'react';

let cards = [
    {
        id: 0,
        bg: 'bg',
        img: 'img0'
    },
    {
        id: 1,
        bg: 'bg',
        img: 'img1'
    },
    {
        id: 2,
        bg: 'bg',
        img: 'img2'
    },
    {
        id: 3,
        bg: 'bg',
        img: 'img3'
    }
];

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isTurnOver: false
        }
    }

    handleOnClick = () => {
        if (this.state.isTurnOver) {
            this.setState({
                isTurnOver: false
            })
        } else {
            this.setState({
                isTurnOver: true
            })
        }
    };

    render() {
        if (!this.state.isTurnOver) {
            return <div onClick={this.handleOnClick}>{this.props.bg}</div>
        } else {
            return <div onClick={this.handleOnClick}>{this.props.img}</div>
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.shuffle = a => {
            for (let i = a.length; i; i--) {
                let j = Math.floor(Math.random() * i);
                [a[i - 1], a[j]] = [a[j], a[i - 1]];
            }
            return a;
        };
    }

    componentWillMount() {
        this.dubbleCards = [];
        this.props.cards.forEach(card => {
            this.dubbleCards.push(<Card key={card.id} img={card.img} bg={card.bg}/>,
                <Card key={card.id + 'd'} img={card.img} bg={card.bg}/>);
        });
        this.dubbleCards = this.shuffle(this.dubbleCards)
    }

    turnOver = () => {

    };


    render() {
        return <div>{this.dubbleCards}</div>
    }
}

class Game extends React.Component {
    render() {
        return <Board cards={cards}/>
    }
}

export {Game}