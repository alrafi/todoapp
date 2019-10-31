import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render() {
    return this.props.items.map(todoItem => (
      <div className="ui segment">
        <TodoItem key={todoItem.id} item={todoItem} />
      </div>
    ));
  }
}

export default TodoList;
