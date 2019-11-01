import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import About from './pages/About';
import Header from '../../src/Header';
import axios from 'axios';

class App extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ items: res.data }));
  }

  onInputSubmit = async title => {
    await axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => this.setState({ items: [...this.state.items, res.data] }));
  };

  onInputEditSubmit = async (id, title) => {
    console.log(id, title);
    const headers = {
      'Content-type': 'application/json; charset=UTF-8'
    };
    await axios
      .patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { title },
        { headers }
      )
      // .then(res => console.log(res))
      .then(res => {
        this.setState(prevState => ({
          items: prevState.items.map(item =>
            item.id == id ? { ...item, title } : item
          )
        }));
        console.log(this.state.items);
      })
      .catch(err => console.error(err));
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

  delItem = async id => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        this.setState({
          items: [...this.state.items.filter(item => item.id !== id)]
        })
      );
  };

  render() {
    return (
      <BrowserRouter>
        <div className="ui container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <TodoInput onSubmit={this.onInputSubmit} />
                <TodoList
                  items={this.state.items}
                  markComplete={this.markComplete}
                  delItem={this.delItem}
                  editItem={this.editItem}
                  saveItem={this.saveItem}
                  onEditSubmit={this.onInputEditSubmit}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
