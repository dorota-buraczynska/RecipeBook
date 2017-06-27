import React from 'react';

class Recipes extends React.Component {
    render() {
        return <ul>
            {this.props.recipesList.map((recipe) => {
                return <li>{recipe}</li>
            })}
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
        return <div style={{display: this.props.display}}>
            <Category />
            <Recipes recipesList={this.props.recipesList}/>
        </div>
    }
}

class Counter extends React.Component {
    render() {
        return <div>{this.props.numberOfRecipes}</div>
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
        return <div>
            <h1 onClick={this.showContent}>List of your recipes</h1>
            <Content display={this.state.contentDisplay} recipesList={this.props.recipesList}/>
            <Counter numberOfRecipes={this.props.numberOfRecipes}/>
        </div>
    }
}

export {RecipesList}
