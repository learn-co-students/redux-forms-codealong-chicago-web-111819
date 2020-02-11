import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = event => {
    // console.log(this.state.text)
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state)
    // console.log(this.props)
  }

  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) } >
          <p>
            <label>add todo</label>
            <input type='text' onChange={(event) => this.handleChange(event)} value={this.state.text} />
          </p>
          <input type='submit' />
          {this.state.text}
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData})
  }
}

// const mapStateToProps = (state) => {
//   return {
//     text: state.text
//   }
// }

export default connect(null, mapDispatchToProps)(CreateTodo);
