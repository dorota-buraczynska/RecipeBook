import React from 'react';
import ReactDOM from 'react-dom';
import {StartPage} from './start-page.jsx';
import {Game} from './game.jsx';
import cards from './cards';
import cardsBreakfast from './cards-breakfast'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startPageIsVisible: true,
            gameDinnerPageIsVisible: false,
            gameBreakfastPageIsVisible: false

        }
    }

    showDinnerGamePage = (event) => {
        this.setState({
            startPageIsVisible: false,
            gameDinnerPageIsVisible: true
        })
    };

    showBreakfastGamePage = (event) => {
        this.setState({
            startPageIsVisible: false,
            gameBreakfastPageIsVisible: true
        })
    };

    render() {
        if (this.state.startPageIsVisible) {
            return <StartPage isVisible={this.state.startPageIsVisible} showDinnerGamePage={this.showDinnerGamePage} showBreakfastGamePage={this.showBreakfastGamePage}/>

        } else if (this.state.gameDinnerPageIsVisible) {
            return <div>
                <Game cards={cards} />
            </div>

        } else if (this.state.gameBreakfastPageIsVisible) {
            return <div>
                <Game cards={cardsBreakfast} />
            </div>
        }

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);