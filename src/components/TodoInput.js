import React from 'react';

class TodoInput extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui big icon input">
          <input type="text" />
          <i class="inverted circular check link icon"></i>
        </form>
      </div>
    );
  }
}

export default TodoInput;
