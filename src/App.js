import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

class App extends React.Component {
  // *constructor
  constructor(props) {
    super(props);

    this.state = {
      username: "tolgahan",
      todoItems: [
        { todo: "Go to GYM", completed: false },
        { todo: "Learn TypeScript", completed: false },
        { todo: "NextJS Practice", completed: false },
      ],
      newTodo: "",
    };
  }

  //  *functions
  todoList() {
    this.state.todoItems.map((todoItem) => {
      return (
        <TodoList
          todo={todoItem.todo}
          completed={todoItem.completed}
          onChecked={() => this.todoCompletedHandler(todoItem)}
        />
      );
    });
  }

  inputChangeHandler = (e) => {
    //console.log(e.target.value);
    this.setState({
      newTodo: e.target.value,
    });
  };

  addTodoHandler = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { todo: this.state.newTodo, completed: false },
      ],
    });
  };

  todoCompletedHandler = (todoItem) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        return item.todo === todoItem.todo
          ? { ...item, completed: !item.completed }
          : item;
      }),
    });
  };

  render = () => (
    <div className="container-fluid">
      <div className="row">
        {/* header */}
        <Navbar username={this.state.username} />

        {/* todo item form */}
        <div className="col-12 px-5 pt-3">
          <input
            type="text"
            className="form-coltrol w-100 py-1 "
            value={this.state.newTodo}
            onChange={this.inputChangeHandler}
          />
          <button
            className="btn btn-info mt-2 w-100 text-black"
            onClick={this.addTodoHandler}
          >
            Add Todo
          </button>
        </div>

        {/* show todo items */}
        <div className="col-12 px-5 pt-4">
          <ul className="list-unstyled">
            {this.todoList()}
            {/*{this.state.todoItems.map((todoItem) => {
              return (
                <li
                  className="bg-secondary mt-3 py-3 px-4 text-white font-weight-bold fs-5 d-flex justify-content-between"
                  key={todoItem.todo}
                >
                  {todoItem.todo}

                  <input
                    type="checkbox"
                    checked={todoItem.completed}
                    onChange={() => this.todoCompletedHandler(todoItem)}
                  />
                </li>
              );
            })}*/}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
