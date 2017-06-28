import React from 'react';

class Recipes extends React.Component {
    render() {
        if (this.props.recipesList.length === 0) {
            return <p className="recipes-list__content">you don't have any recipes</p>
        } else {
            return <ul className="recipes-list__content">
                {this.props.recipesList.map((recipe) => {
                    return <li className="recipes-list__recipe" key={recipe.title}>{recipe.title}</li>
                })}
            </ul>
        }
    }
}
//
// class Category extends React.Component {
//     render() {
//         return <div>
//             <h2>{this.props.recipeCategory}</h2>
//         </div>
//     }
// }

class Content extends React.Component {
    render() {
        return <div style={{display: this.props.display}}>
            {/*<Category recipesList={this.props.recipesList} recipeCategoty={this.props.recipeCategory}/>*/}
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
            <div className="recipes-list__wrapper">
                <h1 className="recipes-list__title" onClick={this.showContent}>recipes list</h1>
                <Counter numberOfRecipes={this.props.numberOfRecipes}/>
            </div>
            <Content display={this.state.contentDisplay} recipesList={this.props.recipesList} recipeCategory={this.props.recipeCategory}/>
        </div>
    }
}

export {RecipesList}
