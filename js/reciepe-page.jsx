import React from 'react';
import ReactDOM from 'react-dom';

class RecipeHeader extends React.Component {
    render() {
        return <div>
            <img />
            <h1>{this.props.title}</h1>
        </div>
    }
}

class RecipeFooter extends React.Component {
    handleOnClickBack = (event) =>{
        if (typeof this.props.showRecipePage === 'function') {
            this.props.showRecipePage(event.target);
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
            <RecipeHeader title="Pasta with chicken" />
            <RecipeText />
            <RecipeFooter showRecipePage={this.props.showRecipePage}/>
        </div>
    }
}

class RecipePage extends React.Component {
    render() {
        return <div className="recipe-page">
            <Recipe  showRecipePage={this.props.showRecipePage} />
        </div>
    }
}

export {RecipePage}