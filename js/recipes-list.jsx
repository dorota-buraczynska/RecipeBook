import React from 'react';

class Recipes extends React.Component {
    render() {
        return <ul>
            {this.props.recipesList.map((recipe) => {
                return <li key={recipe.title}>{recipe.title}</li>
            })}
            <li>burger big</li>
        </ul>
    }
}

class Category extends React.Component {
    render() {
        return <div>
            <h2>Category</h2>
        </div>
    }
}

class Content extends React.Component {
    render() {
        return <div className="recipes-list__content" style={{display: 'block'}}>
            <Category />
            <Recipes recipesList={this.props.recipesList}/>
        </div>
    }
}

class Counter extends React.Component {
    render() {
        return <div className="recipes-list__counter">{this.props.numberOfRecipes}</div>
    }
}

class RecipesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentDisplay: 'none'
        }
    }

    showContent = () => {
        if (this.state.contentDisplay === 'none') {
            this.setState({
                contentDisplay: 'block'
            })
        } else {
            this.setState({
                contentDisplay: 'none'
            })
        }

    };

    render() {
        return <div className="recipes-list">
            <h1 className="recipes-list__title" onClick={this.showContent}>recipes list</h1>
            <Counter numberOfRecipes={this.props.numberOfRecipes}/>
            <Content display={this.state.contentDisplay} recipesList={this.props.recipesList}/>
        </div>
    }
}

export {RecipesList}
