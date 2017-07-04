import React from 'react';
import ReactDOM from 'react-dom';
import {StartPage} from './start-page.jsx';
import {Game} from './game.jsx';
import cardsDinner from './cards-dinner';
import cardsBreakfast from './cards-breakfast';
import cardsDesserts from './cards-desserts';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startPageIsVisible: true,
            gameDinnerPageIsVisible: false,
            gameBreakfastPageIsVisible: false,
            gameDessertPageIsVisible: false,
            gameRecipePageIsVisible: false,
            savedRecipes: [],
            recipesListDinner: [],
            recipesListBreakfast: [],
            recipesListDessert: []
        }
    }

    showDinnerGamePage = () => {
        this.setState({
            startPageIsVisible: false,
            gameDinnerPageIsVisible: true
        })
    };

    showBreakfastGamePage = () => {
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
            gameDessertPageIsVisible: false,
            gameRecipePageIsVisible: false
        })
    };

    chosenRecipes = (title, index, category) => {
        let recipesListDinner = this.state.recipesListDinner;
        let recipesListBreakfast = this.state.recipesListBreakfast;
        let recipesListDessert = this.state.recipesListDessert;
        if (category === 'dinner') {
            recipesListDinner.push({title: title, index: index});
            this.setState({
                recipesListDinner: recipesListDinner
            });
        }
        if (category === 'breakfast') {
            recipesListBreakfast.push({title: title, index: index});
            this.setState({
                recipesListBreakfast: recipesListBreakfast
            });
        }
        if (category === 'dessert') {
            recipesListDessert.push({title: title, index: index});
            this.setState({
                recipesListDessert: recipesListDessert
            });
        }

    };

    render() {
        let preloadImgDinner = new Image();
        preloadImgDinner.src = './images/dinner.jpeg';
        let preloadImgBreakfast = new Image();
        preloadImgBreakfast.src = './images/breakfast1.jpeg';
        let preloadImgDessert = new Image();
        preloadImgDessert.src = './images/desserts.jpeg';

        if (this.state.startPageIsVisible) {
            return <StartPage isVisible={this.state.startPageIsVisible} showDinnerGamePage={this.showDinnerGamePage} showBreakfastGamePage={this.showBreakfastGamePage} showDessertGamePage={this.showDessertGamePage} />

        } else if (this.state.gameDinnerPageIsVisible) {
            return <div className="game game--dinner" style={{backgroundImage: `'url:(${preloadImgDinner.src})'`}}>
                <div className="game__board-bg"></div>
                <Game cards={cardsDinner} backToStart={this.backToStart} chosenRecipes={this.chosenRecipes} recipesList={this.state.recipesListDinner}/>
            </div>

        } else if (this.state.gameBreakfastPageIsVisible) {
            return <div className="game game--breakfast" style={{backgroundImage: `'url:(${preloadImgBreakfast.src})'`}}>
                <div className="game__board-bg"></div>
                <Game cards={cardsBreakfast} backToStart={this.backToStart} chosenRecipes={this.chosenRecipes} recipesList={this.state.recipesListBreakfast}/>
            </div>
        } else if (this.state.gameDessertPageIsVisible) {
            return <div className="game game--dessert" style={{backgroundImage: `'url:(${preloadImgDessert.src})'`}}>
                <div className="game__board-bg"></div>
                <Game cards={cardsDesserts} backToStart={this.backToStart} chosenRecipes={this.chosenRecipes}  recipesList={this.state.recipesListDessert} />
            </div>
        }
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);