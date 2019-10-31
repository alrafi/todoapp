import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        content: 'Hi there, this is your first todo item',
        completed: false
      },
      {
        id: 2,
        content: 'You can delete this item',
        completed: false
      }
    ]
  };

  onInputSubmit = content => {
    const newTodoItem = {
      id: uuid.v4(),
      content,
      completed: false
    };
    this.setState({ items: [...this.state.items, newTodoItem] });
  };

  markComplete = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
    console.log(id);
  };

  render() {
    return (
      <div className="ui container">
        <h1>To do app</h1>
        <TodoInput onSubmit={this.onInputSubmit} />
        <TodoList items={this.state.items} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
