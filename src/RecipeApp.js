import React, { Component } from 'react'
import RecipeList from './RecipeList'
import Navbar from './Navbar'
import RecipeInput from './RecipeInput'


class RecipeApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recipes: [
        {
          id           : 0,
          img          : 'spagetti.jpeg',
          title        : 'Pasta',
          ingredients  : ['flour', 'water'],
          instructions : 'Mix ingredients.'
        },
        {
          id           : 1,
          img          : 'spagetti.jpeg',
          title        : 'Pasta',
          ingredients  : ['flour', 'water'],
          instructions : 'Mix ingredients.'
        }
      ],
    nextRecipeId: 2,
    showForm: false
    }

    this.handleSave = this.handleSave.bind(this)
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: prevState.nextRecipeId}
      return {
        recipes: [...prevState.recipes, newRecipe],
        nextRecipeId: prevState.nextRecipeId + 1,
        showForm: false
      }
    })
  }

  render() {
    const {showForm} = this.state
    return (
      <div className={'App'}>
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        {showForm ?
          <RecipeInput
            onSave={this.handleSave}
            onClose={() => this.setState({showForm: false})}
          />
          : null}
        <RecipeList recipes={this.state.recipes}/>
      </div>
    )
  }
}

export default RecipeApp
