import React from 'react';

class RecipeHeader extends React.Component {
    render() {
        return <div className="recipe-page__header">
            <img className="recipe-page__header-img" src={this.props.img}/>
            <h1 className="recipe-page__header-title">{this.props.title}</h1>
        </div>
    }
}

class RecipeFooter extends React.Component {
    handleOnClickBack = () => {
        if (typeof this.props.showGamePage === 'function') {
            this.props.showGamePage();
        }
    };

    saveRecipe = () => {
        if (typeof this.props.saveRecipe === 'function') {
            this.props.saveRecipe();
        }
    };

    render() {
        return <div>
            <button onClick={this.saveRecipe}>save recipe</button>
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
            <RecipeFooter showGamePage={this.props.showGamePage} saveRecipe={this.props.saveRecipe}/>
        </div>
    }
}

class RecipePage extends React.Component {
    render() {
        return <div className="recipe-page" style={{display: this.props.isVisible}}><Recipe showGamePage={this.props.hideRecipePage} saveRecipe={this.props.saveRecipe} title={this.props.title} img={this.props.img}/></div>
    }
}

export {RecipePage}