import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Recipe.css'

class Recipe extends Component {
  static PropTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render () {
    const {id, title, img, instructions, onDelete} = this.props
    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ))
    return (
      <div className='recipe-card'>
        <div className='recipe-card-img'>
          <img src={img} alt={title}/>
        </div>
        <div className='recipe-card-content'>
          <h3>{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredients}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
          <button onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    )
  }
}

export default Recipe