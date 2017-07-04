import React from 'react';
import {RecipePage} from './reciepe-page.jsx';
import {RecipesList} from './recipes-list.jsx';
import {MainButton} from './start-page.jsx'

class Card extends React.Component {

    handleOnClick = () => {
        if (typeof this.props.turnOverCard === 'function') {
            this.props.turnOverCard();
        }
    };

    render() {
        let preloadImg = new Image();
        preloadImg.src = this.props.img;
        let preloadImgBg = new Image();
        preloadImgBg.src = './images/dinner.jpeg';
        if (this.props.isTurnOver === false) {
            return <div style={{pointerEvents: this.props.pointerEvents, backgroundImage: this.props.bg}} className="game__card" onClick={this.handleOnClick}/>
        } else {
            return <div className="game__turn-over-card-wrapper">
                <img src={preloadImg.src} style={{pointerEvents: this.props.pointerEvents}} className="game__turn-over-card" onClick={this.handleOnClick}/>
            </div>
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

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
            doubleCards: doubleCards,
            statesArray: [],
            recipeCategory: '',
            recipeTitle: '',
            recipeImg: '',
            recipeIndex: '',
            recipeId: '',
            recipeIngredients: [],
            recipeRealization: '',
            recipePageDisplay: 'none',
            pointerEvents: 'auto',
            recipeIsDisplay: false
        };
    }

    hideRecipePage = () => {
        this.setState({
            recipePageDisplay: 'none',
            recipeIsDisplay: false
        })
    };

    chosenRecipes = () => {
        if (typeof this.props.chosenRecipes === 'function') {
            this.props.chosenRecipes(this.state.recipeTitle, this.state.recipeId, this.state.recipeCategory);
        }
    };

    turnOverCard = (card, index) => {
        let tempArray = this.state.doubleCards;
        let statesArray = this.state.statesArray;
        if (this.state.doubleCards[index].isTurnOver === false) {
            tempArray[index].isTurnOver = true;
            statesArray.push(index);
            this.setState({
                doubleCards: tempArray,
                statesArray: statesArray
            })
        }

        if (this.state.statesArray.length === 2) {
            let indexOne = this.state.statesArray[0];
            let indexTwo = this.state.statesArray[1];
            let idFirstCard = this.state.doubleCards[indexOne].id;
            let idSecondCard = this.state.doubleCards[indexTwo].id;

            if (idFirstCard !== idSecondCard) {
                this.setState({
                    pointerEvents: 'none'
                });
                setTimeout(() => {
                    this.state.doubleCards[indexOne].isTurnOver = false;
                    this.state.doubleCards[indexTwo].isTurnOver = false;
                    this.setState({
                        statesArray: [],
                        pointerEvents: 'auto'
                    });
                }, 2000)
            } else {
                this.setState({
                    pointerEvents: 'none'
                });
                setTimeout(() => {
                    this.state.doubleCards[indexOne].isTurnOver = true;
                    this.state.doubleCards[indexTwo].isTurnOver = true;
                    let recipeCategory = this.state.doubleCards[indexOne].category;
                    this.setState({
                        statesArray: [],
                        recipePageDisplay: 'block',
                        pointerEvents: 'auto',
                        recipeCategory: recipeCategory,
                        recipeTitle: this.state.doubleCards[indexOne].title,
                        recipeImg: this.state.doubleCards[indexOne].img,
                        recipeId: idFirstCard,
                        recipeIndex: indexOne,
                        recipeIngredients: this.state.doubleCards[indexOne].ingredients,
                        recipeRealization: this.state.doubleCards[indexOne].realization
                    },);
                }, 1500);
            }
        }
    };

    saveRecipe = () => {
        this.setState({
            recipePageDisplay: 'none'
        });
        this.chosenRecipes(this.state.recipeTitle, this.state.recipeId, this.state.recipeCategory);
    };

    showRecipe = (event) => {
        let recipeIndex = event.getAttribute('data-index');
        this.setState({
            recipePageDisplay: 'block',
            recipeIsDisplay: true,
            recipeTitle: this.props.cards[recipeIndex].title,
            recipeImg: this.props.cards[recipeIndex].img,
            recipeIngredients: this.props.cards[recipeIndex].ingredients,
            recipeRealization: this.props.cards[recipeIndex].realization
        })
    };

    render() {
        let cards = this.state.doubleCards.map((card, index) => {
            return <Card key={index} turnOverCard={card => this.turnOverCard(card, index)} img={card.img} bg={card.bg} isTurnOver={card.isTurnOver} pointerEvents={this.state.pointerEvents}/>
        });

        return <div className="game__board-wrapper">
            <RecipesList showRecipe={this.showRecipe} numberOfRecipes={this.state.numberOfRecipes} recipesList={this.props.recipesList}/>
            <RecipePage hideRecipePage={this.hideRecipePage} saveRecipe={this.saveRecipe} recipeIsDisplay={this.state.recipeIsDisplay} title={this.state.recipeTitle} ingredients={this.state.recipeIngredients} realization={this.state.recipeRealization} img={this.state.recipeImg} isVisible={this.state.recipePageDisplay}/>
            <div className="game__board">{cards}</div>
            <MainButton title="back to start" backToStart={this.props.backToStart}/>
        </div>
    }
}

class Game extends React.Component {
    render() {
        return <div>
            <Board cards={this.props.cards} backToStart={this.props.backToStart} chosenRecipes={this.props.chosenRecipes} recipesList={this.props.recipesList}/>
        </div>
    }
}

export {Game}