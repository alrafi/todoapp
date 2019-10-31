import React from 'react';

class TodoInput extends React.Component {
  state = { content: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
    this.setState({ content: '' });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui big icon input" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.content}
            onChange={e => this.setState({ content: e.target.value })}
          />
          <button
            className="ui circular icon button"
            style={{ marginLeft: 10 }}
          >
            <i className="inverted circular check link icon"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
