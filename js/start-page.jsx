import React from 'react';
import ReactDOM from 'react-dom';

class PlayButton extends React.Component {
    handleOnClick = (event) => {
        if (typeof this.props.showGamePage === 'function') {
            this.props.showGamePage(event.target);
        }
    };

    render() {
        return <button onClick={this.handleOnClick} className="start-page__play-button">{this.props.department}</button>
    }
}

class MainMenu extends React.Component {
    render() {
        return <div className="start-page__main-menu">
            <PlayButton department="breakfast" showGamePage={this.props.showGamePage}/>
            <PlayButton department="dinner" showGamePage={this.props.showGamePage}/>
            <PlayButton department="dessert" showGamePage={this.props.showGamePage}/>
        </div>
    }
}

class StartPage extends React.Component {
    render() {
        return <div className="start-page">
            <MainMenu showGamePage={this.props.showGamePage}/>
        </div>
    }
}

export {StartPage}