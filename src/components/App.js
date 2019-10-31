import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    items: [
      {
        id: uuid.v4(),
        content: 'Hi there, this is your first todo item',
        completed: false,
        editActive: 'none',
        inputActive: 'block'
      },
      {
        id: uuid.v4(),
        content: 'You can edit or delete this item',
        completed: true,
        editActive: 'none',
        inputActive: 'block'
      }
    ]
  };

  onInputSubmit = content => {
    const newTodoItem = {
      id: uuid.v4(),
      content,
      completed: false,
      editActive: 'none',
      inputActive: 'block'
    };
    this.setState({ items: [...this.state.items, newTodoItem] });
  };

  onInputEditSubmit = (id, content) => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id
          ? { ...item, content, editActive: 'none', inputActive: 'block' }
          : item
      )
    }));
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
  };

  delItem = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };

  editItem = id => {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id
          ? { ...item, editActive: 'block', inputActive: 'none' }
          : item
      )
    }));
  };

  render() {
    return (
      <div className="ui container">
        <h1>To do app</h1>
        <TodoInput onSubmit={this.onInputSubmit} />
        <TodoList
          items={this.state.items}
          markComplete={this.markComplete}
          delItem={this.delItem}
          editItem={this.editItem}
          saveItem={this.saveItem}
          onEditSubmit={this.onInputEditSubmit}
        />
      </div>
    );
  }
}

export default App;
