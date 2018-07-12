import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './components/AppNav';
import ShoppingList from './components/shoppingList'
import ItemModal from './components/ItemModal';
import { Provider } from 'react-redux';
import store from './store';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNav />
        <ItemModal />
        <ShoppingList />
      </div>
      </Provider>
    );
  }
}

export default App;
