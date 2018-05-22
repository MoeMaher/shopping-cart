import React, { Component } from 'react';
import './App.css';

import CartComponent from './js/containers/CartComponent/cart.component'

import Layout from './js/components/Layout/layout.component';

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
              <CartComponent />
          </Layout>
      </div>
    );
  }
}

export default App;
