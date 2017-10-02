import React, {Component} from 'react'
import './RecipeInput.css'

class RecipeInput extends Component {
  static defaultProps = {
    onClose() {},
    onSave() {}
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleNewIngredient = this.handleNewIngredient.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    if (event.target.name.slice(0, 10) === 'ingredient') {
      const index = event.target.name.slice(11)
      const ingredients = [...this.state.ingredients]
      ingredients[index] = event.target.value
      this.setState({ingredients})
    }
    else {
      this.setState({[event.target.name]: event.target.value})
    }
  }

  handleNewIngredient(event) {
    this.setState({ingredients: [...this.state.ingredients, '']})
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.props.onSave({...this.state})
    this.setState({
      title: '',
      instructions: '',
      ingredients: [''],
      img: ''
    })
  }

  render() {
    const {title, instructions, ingredients, img} = this.state
    const {onClose} = this.props
    let inputs = ingredients.map((ingredient, index) => (
      <div
        className='recipe-form-line'
        key={`ingredient-${index}`}>
        <label>{index+1}
          <input
            type='text'
            name={`ingredient-${index}`}
            value={ingredient}
            size='45'
            autoComplete='off'
            onChange={this.handleChange}
          />
        </label>
      </div>
    ))


    return(
      <div className='recipe-form-container'>
        <form
          className='recipe-form'
          onSubmit={this.handleSubmit}>
          <button
            type='button'
            className='close-button'
            onClick={onClose}>
            X
          </button>
          <div className='recipe-form-line'>
            <label>Title:
              <input
                type='text'
                name='title'
                value={title}
                size='42'
                autoComplete='off'
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div className='recipe-form-twoline'>
            <label> Instructions:
            </label>
              <textarea
                name='instructions'
                value={instructions}
                row='8'
                col='50'
                autoComplete='off'
                onChange={this.handleChange}
              />
          </div>
          {inputs}
          <button
            type='button'
            className='close-button'
            onClick={this.handleNewIngredient}>
            +
          </button>
          <div className='recipe-form-line'>
            <label>Image URL:
              <input
                type='text'
                name='img'
                value={img}
                size='36'
                autoComplete='off'
                onChange={this.handleChange}
              />
            </label>
          </div>
          <button
            type='submit'
            className='buttons'>
            SAVE
          </button>

        </form>
      </div>

    )
  }
}

export default RecipeInput