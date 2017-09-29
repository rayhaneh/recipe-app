import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Recipe from './Recipe'
import './RecipeList.css'

class RecipeList extends Component {
  static defaultProps = {
    recipes: [
      {
        img          : 'spagetti.jpeg',
        title        : 'Pasta',
        ingredients  : ['flour', 'water'],
        instructions : 'Mix ingredients.'
      },
      {
        img          : 'spagetti.jpeg',
        title        : 'Pasta',
        ingredients  : ['flour', 'water'],
        instructions : 'Mix ingredients.'
      }
    ]
  }

  static propType = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  }

  render () {
    const recipes = this.props.recipes.map((recipe, index) => (
      <Recipe key={index} {...recipe}/>
    ))
    return (
      <div className={'recipe-list'}>
        {recipes}
      </div>
    )
  }
}


export default RecipeList