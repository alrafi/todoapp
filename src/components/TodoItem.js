import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div className="ui relaxed items">
        <div className="item">
          <i className="sticky note outline icon big"></i>
          <div className="middle aligned content">
            <p className="header">{this.props.item.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
