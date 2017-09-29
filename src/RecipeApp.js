import React, { Component } from 'react'
import logo from './logo.svg'
import './RecipeApp.css'
import Recipe from './Recipe'

class RecipeApp extends Component {
  static defaultProps = {
    recipes: [
      {
        img          : 'spagetti.jpeg',
        title        : 'Pasta',
        ingredients  : ['flour', 'water'],
        instructions : 'Mix ingredients.'
      }
    ]
  }

  render() {
    return (
      <div>
        {this.props.recipes.map((recipe, index) => (
          <Recipe key={index}
            img          = {recipe.img}
            title        = {recipe.title}
            ingredients  = {recipe.ingredients}
            instructions = {recipe.instructions}
          />
        ))}
      </div>
    )
  }
}

export default RecipeApp
