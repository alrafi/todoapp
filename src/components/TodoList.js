import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return this.props.items.map(todoItem => (
      <div className="ui segment">
        <TodoItem
          key={todoItem.id}
          item={todoItem}
          markComplete={this.props.markComplete}
          delItem={this.props.delItem}
          editItem={this.props.editItem}
        />
      </div>
    ));
  }
}

export default TodoList;
