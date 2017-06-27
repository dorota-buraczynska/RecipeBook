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
            gamePageIsVisible: false
        }
    }

    showGamePage = (event) => {
        this.setState({
            startPageIsVisible: false,
            gamePageIsVisible: true
        })
    };

    showRecipePage = (event) => {
        this.setState({
            startPageIsVisible: true
        })
    };

    render() {
        // if (this.state.startPageIsVisible) {
        //     return <StartPage isVisible={this.state.startPageIsVisible} showGamePage={this.showGamePage}/>
        //
        // } else {
            return <div>
                <StartPage/>
                <Game />
                <RecipePage/>
            </div>
        //
        // }

    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);