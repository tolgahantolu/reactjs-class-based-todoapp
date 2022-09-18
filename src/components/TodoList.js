import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <li
        className="bg-secondary mt-3 py-3 px-4 text-white font-weight-bold fs-5 d-flex justify-content-between"
        key={this.props.todo}
      >
        {this.props.todo}

        <input
          type="checkbox"
          checked={this.props.completed}
          onChange={this.props.onChecked}
        />
      </li>
    );
  }
}

export default TodoList;
