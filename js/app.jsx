import React from 'react';
import ReactDOM from 'react-dom';
import {StartPage} from './start-page.jsx';
import {RecipePage} from './reciepe-page.jsx';
import {Game} from './game.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startPageIsVisible: true,
            recipePageIsVisible: false
        }
    }

    showGamePage = (event) => {
        this.setState({
            startPageIsVisible: false
        })
    };

    showRecipePage = (event) => {
        this.setState({
            startPageIsVisible: true
        })
    };

    render() {
        return <div>
            <StartPage isVisible={this.state.startPageIsVisible} showGamePage={this.showGamePage}/>
            <RecipePage isVisible={this.state.recipePageIsVisible} showRecipePage={this.showRecipePage}/>
            <Game />
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);