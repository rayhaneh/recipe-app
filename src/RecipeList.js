import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {

  static propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    const recipes = this.props.recipes.map(recipe => (
      <Recipe key={recipe.id} {...recipe}/>
    ))
    return (
      <div className={'recipe-list'}>
        {recipes}
      </div>
    )
  }
}


export default RecipeList