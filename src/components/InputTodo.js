import React, { Component } from "react";

export default class InputTodo extends Component {
  state = {
    title: ""
  };
  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add your list of things to do today"
          onChange={this.onChange}
          value={this.state.title}
        />
        <button>
          Submit
        </button>
      </form>
    )
  }
}
