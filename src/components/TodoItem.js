import React from 'react';

class TodoItem extends React.Component {
  state = {
    content: '',
    editStatus: { editId: '', editActive: 'none', inputActive: 'block' }
  };

  onFormEditSubmit = e => {
    // console.log(e.target.children[1].id);
    e.preventDefault();
    this.state.content === ''
      ? this.props.onEditSubmit(
          e.target.children[1].id,
          this.props.item.content
        )
      : this.props.onEditSubmit(e.target.children[1].id, this.state.content);
    this.setState({
      editStatus: { editId: '', editActive: 'none', inputActive: 'block' }
    });
  };

  onButtonEdit = e => {
    // console.log(e.target.id);
    this.setState({
      editStatus: {
        editId: e.target.id,
        editActive: 'block',
        inputActive: 'none'
      }
    });
  };

  itemStyle = () => {
    return {
      padding: '5px 10px 0 10px',
      textDecoration: this.props.item.completed ? 'line-through' : 'none'
    };
  };

  editStyle = () => {
    return {
      // display: this.props.item.editActive
      display: this.state.editStatus.editActive
    };
  };

  contentStyle = () => {
    return {
      // display: this.props.item.inputActive
      display: this.state.editStatus.inputActive
    };
  };

  render() {
    // console.log(this.state.editStatus);
    const { id, content, completed } = this.props.item;
    return (
      <div className="ui relaxed items">
        <div className="item">
          <i className="sticky note outline icon big"></i>
          <div className="middle aligned content">
            <p
              className="header"
              style={{ ...this.itemStyle(), ...this.contentStyle() }}
            >
              {content}
            </p>
            <div className="ui input" style={this.editStyle()}>
              <form className="ui input focus" onSubmit={this.onFormEditSubmit}>
                <input
                  type="text"
                  defaultValue={content}
                  style={{ width: '50vw' }}
                  onChange={e => this.setState({ content: e.target.value })}
                />
                <button
                  id={id}
                  className="ui icon button"
                  type="submit"
                  style={{ marginLeft: 10 }}
                >
                  <i className="save icon"></i>
                </button>
              </form>
            </div>
          </div>
          <button className="ui icon button">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={this.props.markComplete.bind(this, id)}
            />
          </button>
          <button
            className="ui icon button"
            id={id}
            // onClick={this.props.editItem.bind(this, id)}
            onClick={this.onButtonEdit}
          >
            <i className="edit icon"></i>
          </button>
          <button
            className="ui icon button"
            onClick={this.props.delItem.bind(this, id)}
          >
            <i className="trash icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
