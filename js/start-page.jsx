import React from 'react';

class MainButton extends React.Component {
    handleOnClick = () => {
        if (typeof this.props.showDinnerGamePage === 'function') {
            this.props.showDinnerGamePage();
        }
        if (typeof this.props.showBreakfastGamePage === 'function') {
            this.props.showBreakfastGamePage();
        }
        if (typeof this.props.showDessertGamePage === 'function') {
            this.props.showDessertGamePage();
        }
        if (typeof this.props.backToStart === 'function') {
            this.props.backToStart();
        }
    };

    render() {
        return <button onClick={this.handleOnClick} className="start-page__play-button start-page__play-button--back-to-start">{this.props.title}</button>
    }
}

class MainMenu extends React.Component {
    render() {
        return <div className="start-page__main-menu">
            <MainButton title="breakfast" showBreakfastGamePage={this.props.showBreakfastGamePage}/>
            <MainButton title="dinner" showDinnerGamePage={this.props.showDinnerGamePage}/>
            <MainButton title="dessert" showDessertGamePage={this.props.showDessertGamePage}/>
        </div>
    }
}

class StartPage extends React.Component {
    render() {
        let preloadImg = new Image();
        preloadImg.src = './images/bg.jpeg';
        return <div>
            <div className="start-page" style={{backgroundImage: `'url:(${preloadImg.src})'`}}></div>
            <MainMenu showDinnerGamePage={this.props.showDinnerGamePage} showBreakfastGamePage={this.props.showBreakfastGamePage} showDessertGamePage={this.props.showDessertGamePage} />
        </div>
    }
}

export {StartPage}
export {MainButton}