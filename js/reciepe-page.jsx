import React from 'react';
import ReactDOM from 'react-dom';
import {Game} from "./game.jsx";

class RecipeHeader extends React.Component {
    render() {
        return <div>
            <img src={this.props.img}/>
            <h1>{this.props.title}</h1>
        </div>
    }
}

class RecipeFooter extends React.Component {
    handleOnClickBack = (event) => {
        if (typeof this.props.showGamePage === 'function') {
            this.props.showGamePage(event.target);
        }
    };

    render() {
        return <div>
            <button>save recipe</button>
            <button onClick={this.handleOnClickBack}>back to game</button>
        </div>
    }
}

class RecipeText extends React.Component {
    render() {
        return <div>
            <p></p>
        </div>
    }
}

class Recipe extends React.Component {
    render() {
        return <div className="recipe-page__recipe">
            <RecipeHeader title={this.props.title} img={this.props.img}/>
            <RecipeText />
            <RecipeFooter showGamePage={this.props.showGamePage}/>
        </div>
    }
}

class RecipePage extends React.Component {
    render() {
        return <div style={{display: this.props.isVisible}}><Recipe showGamePage={this.props.hideRecipePage} title={this.props.title} img={this.props.img}/></div>
    }
}

export {RecipePage}