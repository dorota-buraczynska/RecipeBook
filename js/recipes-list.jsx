import React from 'react';

class Recipes extends React.Component {
    render() {
        return <ul>

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
            <Recipes />
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
            <Content display={this.state.contentDisplay}/>
            <Counter numberOfRecipes={this.props.numberOfRecipes}/>
        </div>
    }
}

export {RecipesList}
