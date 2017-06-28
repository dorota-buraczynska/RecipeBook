import React from 'react';
import {RecipePage} from './reciepe-page.jsx';
import {RecipesList} from './recipes-list.jsx';
import cards from './cards';


class Card extends React.Component {

    handleOnClick = () => {
        if (typeof this.props.turnOverCard === 'function') {
            this.props.turnOverCard();
        }
    };

    render() {
        if (this.props.isTurnOver === false) {
            return <div style={{pointerEvents: this.props.pointerEvents}} className="game__card" onClick={this.handleOnClick}/>
        } else {
            return <div style={{backgroundImage: this.props.img}} className="game__turn-over-card-wrapper">
                <img src={this.props.img} style={{pointerEvents: this.props.pointerEvents}} className="game__turn-over-card" onClick={this.handleOnClick}/>
            </div>
        }
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);

        let cardsStates = [];
        for (let i = 0; i < cards.length; i++) {
            cardsStates.push(false, false);
        }

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
            cardsTurnOverStates: cardsStates,
            doubleCards: doubleCards,
            statesArray: [],
            recipeTitle: '',
            recipeImg: '',
            recipeId: '',
            recipeIngredients: '',
            recipeRealization: '',
            recipeCategory: '',
            recipePageDisplay: 'none',
            pointerEvents: 'auto',
            numberOfRecipes: 0,
            recipesList: []
        };
    }

    hideRecipePage = () => {
        this.setState({
            recipePageDisplay: 'none'
        })
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
                    this.setState({
                        statesArray: [],
                        recipePageDisplay: 'block',
                        pointerEvents: 'auto',
                        recipeTitle: this.state.doubleCards[indexOne].title,
                        recipeImg: this.state.doubleCards[indexOne].img,
                        recipeId: this.state.doubleCards[indexOne].id,
                        recipeIngredients: this.state.doubleCards[indexOne].ingredients,
                        recipeRealization: this.state.doubleCards[indexOne].realization,
                        recipeCategory: this.state.doubleCards[indexOne].category
                    });
                }, 1500)
            }
        }
    };

    saveRecipe = () => {
        let tempArray = this.state.recipesList;
        tempArray.push({title: this.state.recipeTitle, id: this.state.recipeId});
        this.setState({
            numberOfRecipes: this.state.numberOfRecipes + 1,
            recipesList: tempArray,
            recipePageDisplay: 'none'
        });
    };


    render() {
        let cards = this.state.doubleCards.map((card, index) => {
            return <Card key={index} turnOverCard={card => this.turnOverCard(card, index)} img={card.img} bg={card.bg} isTurnOver={card.isTurnOver} pointerEvents={this.state.pointerEvents}/>
        });

        return <div>
            <RecipesList numberOfRecipes={this.state.numberOfRecipes} recipesList={this.state.recipesList} recipeCategory={this.state.recipeCategory}/>
            <RecipePage hideRecipePage={this.hideRecipePage} saveRecipe={this.saveRecipe} title={this.state.recipeTitle} ingredients={this.state.recipeIngredients} realization={this.state.recipeRealization} img={this.state.recipeImg} isVisible={this.state.recipePageDisplay}/>
            <div className="game__board">{cards}</div>
        </div>
    }
}

class Game extends React.Component {
    render() {
        return <div className="game">
            <Board cards={cards}/>
        </div>
    }
}

export {Game}