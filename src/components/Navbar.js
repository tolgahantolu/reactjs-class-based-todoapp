import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="col-12 p-0">
        <h2 className="bg-primary text-white text-capitalize text-center py-3">
          {this.props.username}'s Todo List
        </h2>
      </div>
    );
  }
}

export default Navbar;
