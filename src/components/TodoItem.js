import React from 'react';

class TodoItem extends React.Component {
  itemStyle = () => {
    return {
      padding: '5px 10px 0 10px',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, content } = this.props.item;
    return (
      <div className="ui relaxed items">
        <div className="item">
          <i className="sticky note outline icon big"></i>
          <div className="middle aligned content">
            <p className="header" style={this.itemStyle()}>
              {content}
            </p>
          </div>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
        </div>
      </div>
    );
  }
}

export default TodoItem;
