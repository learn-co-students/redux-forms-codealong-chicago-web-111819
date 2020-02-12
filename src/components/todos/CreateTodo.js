import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state);
    this.setState({text: ''});
    // [alt]
    // this.props.dispatch({ type: 'ADD_TODO', payload: this.state });
  }

  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={e => this.handleSubmit(e) } >
          <p><label>add todo</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            /></p>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

// with [alt] connect syntax below in use, this function isn't necessary.
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
// [alt]
// export default connect()(CreateTodo);
