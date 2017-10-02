import React, { Component } from 'react'
import PropType from 'prop-types'
import './Navbar.css'

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }

  static propType = {
    onNewRecipe: PropType.func
  }

  render () {
    return (
      <header>
        <h2><a>Recipe App</a></h2>
        <nav>
          <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </nav>
      </header>
    )
  }
}

export default Navbar