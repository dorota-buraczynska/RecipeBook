import React from 'react';
import ReactDOM from 'react-dom';

class PlayButton extends React.Component {
    handleOnClick = (event) => {
        if (typeof this.props.showDinnerGamePage === 'function') {
            this.props.showDinnerGamePage(event.target);
        }
        if (typeof this.props.showBreakfastGamePage === 'function') {
            this.props.showBreakfastGamePage(event.target);
        }
    };

    render() {
        return <button onClick={this.handleOnClick} className="start-page__play-button">{this.props.category}</button>
    }
}

class MainMenu extends React.Component {
    render() {
        return <div className="start-page__main-menu">
            <PlayButton category="breakfast" showBreakfastGamePage={this.props.showBreakfastGamePage}/>
            <PlayButton category="dinner" showDinnerGamePage={this.props.showDinnerGamePage}/>
            <PlayButton category="dessert" showGamePage={this.props.showGamePage}/>
        </div>
    }
}

class StartPage extends React.Component {
    render() {
        return <div>
            <div className="start-page"></div>
            <MainMenu showDinnerGamePage={this.props.showDinnerGamePage} showBreakfastGamePage={this.props.showBreakfastGamePage}/>
        </div>
    }
}

export {StartPage}