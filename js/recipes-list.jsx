import React from 'react';

class Recipes extends React.Component {
    showRecipe = (event) => {
        if (typeof this.props.showRecipe === 'function') {
            this.props.showRecipe(event.target);
        }
        if (typeof this.props.hideContent === 'function') {
            this.props.hideContent(event.target);
        }
    };

    render() {
        if (this.props.recipesList.length === 0) {
            return <p className="recipes-list__content">you don't have any recipes</p>
        } else {
            console.log(this.props.recipesList)
            return <ul className="recipes-list__content">
                {this.props.recipesList.map((recipe) => {
                    return <li onClick={this.showRecipe} className="recipes-list__recipe" data-index={recipe.index} key={recipe.title}>{recipe.title}</li>
                })}
            </ul>
        }
    }
}

class Content extends React.Component {
    render() {
        return <div style={{display: this.props.display}}>
            <Recipes recipesList={this.props.recipesList} showRecipe={this.props.showRecipe} hideContent={this.props.hideContent}/>
        </div>
    }
}

class Counter extends React.Component {
    render() {
        return <div className="recipes-list__counter">{this.props.recipesList.length}</div>
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

    hideContent = () => {
        this.setState({
            contentDisplay: 'none'
        })
    };

    render() {
        return <div className="recipes-list">
            <div className="recipes-list__wrapper" onClick={this.showContent}>
                <h1 className="recipes-list__title">recipes list</h1>
                <Counter numberOfRecipes={this.props.numberOfRecipes} recipesList={this.props.recipesList}/>
            </div>
            <Content display={this.state.contentDisplay} recipesList={this.props.recipesList} recipeCategory={this.props.recipeCategory} showRecipe={this.props.showRecipe} hideContent={this.hideContent}/>
        </div>
    }
}

export {RecipesList}
