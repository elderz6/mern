import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';
import ShoppingList from './components/shoppingList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNav />
        <h1>Hello</h1>
        <ShoppingList />
      </div>
    );
  }
}

export default App;
