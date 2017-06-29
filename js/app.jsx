import React from 'react';
import ReactDOM from 'react-dom';
import {StartPage} from './start-page.jsx';
import {Game} from './game.jsx';
import cardsDinner from './cards-dinner';
import cardsBreakfast from './cards-breakfast'
import cardsDesserts from './cards-desserts'


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startPageIsVisible: true,
            gameDinnerPageIsVisible: false,
            gameBreakfastPageIsVisible: false,
            gameDessertPageIsVisible: false
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

    showDessertGamePage = () => {
        this.setState({
            startPageIsVisible: false,
            gameDessertPageIsVisible: true
        })
    };

    backToStart = () => {
      this.setState({
          startPageIsVisible: true,
          gameDinnerPageIsVisible: false,
          gameBreakfastPageIsVisible: false,
          gameDessertPageIsVisible: false
      })
    };

    render() {
        if (this.state.startPageIsVisible) {
            return <StartPage isVisible={this.state.startPageIsVisible} showDinnerGamePage={this.showDinnerGamePage} showBreakfastGamePage={this.showBreakfastGamePage} showDessertGamePage={this.showDessertGamePage}/>

        } else if (this.state.gameDinnerPageIsVisible) {
            return <div className="game game--dinner">
                <div className="game__board-bg"></div>
                <Game cards={cardsDinner} backToStart={this.backToStart}/>
            </div>

        } else if (this.state.gameBreakfastPageIsVisible) {
            return <div className="game game--breakfast">
                <div className="game__board-bg"></div>
                <Game cards={cardsBreakfast} backToStart={this.backToStart}/>
            </div>
        } else if (this.state.gameDessertPageIsVisible) {
            return <div className="game game--dessert">
                <div className="game__board-bg"></div>
                <Game cards={cardsDesserts} backToStart={this.backToStart}/>
            </div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);