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
        if (this.props.recipeIsDisplay) {
            return <div>
                <button className="recipe-page__button" onClick={this.handleOnClickBack}>back to game</button>
            </div>
        } else {
            return <div>
                <button className="recipe-page__button" onClick={this.saveRecipe}>save recipe</button>
                <button className="recipe-page__button" onClick={this.handleOnClickBack}>back to game</button>
            </div>
        }
    }
}

class RecipeText extends React.Component {
    render() {
        return <div className="recipe-page__text">
            <p className="recipe-page__title">ingredients</p>
            <ul className="recipe-page__ingredients">
                {this.props.ingredients.map((ingredient, index) => {
                    return <li key={index}>{ingredient}</li>
                })}
            </ul>
            <p className="recipe-page__realization">{this.props.realization}</p>
        </div>
    }
}

class Recipe extends React.Component {
    render() {
        return <div className="recipe-page__recipe">
            <RecipeHeader title={this.props.title} img={this.props.img}/>
            <RecipeText ingredients={this.props.ingredients} realization={this.props.realization}/>
            <RecipeFooter showGamePage={this.props.showGamePage} saveRecipe={this.props.saveRecipe} recipeIsDisplay={this.props.recipeIsDisplay}/>
        </div>
    }
}

class RecipePage extends React.Component {
    render() {
        return <div className="recipe-page" style={{display: this.props.isVisible}}><Recipe showGamePage={this.props.hideRecipePage} saveRecipe={this.props.saveRecipe} title={this.props.title} img={this.props.img} realization={this.props.realization} ingredients={this.props.ingredients} recipeIsDisplay={this.props.recipeIsDisplay}/></div>
    }
}

export {RecipePage}
