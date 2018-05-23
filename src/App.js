import React, { Component } from 'react';
import './App.css';

import CartComponent from './js/containers/mainComponent/main.component'

import Layout from './js/components/Layout/layout.component';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfItems: 0,
            viewCart: true
        }
    }

    incItems() {
        let prevNum = this.state.numOfItems;
        let updatedNum = prevNum + 1;
        this.setState({numOfItems: updatedNum});
    }

    decItems() {
        let prevNum = this.state.numOfItems;
        let updatedNum = prevNum + 1;
        this.setState({numOfItems: updatedNum});
    }

    toggleCartView() {
        let currCartState = this.state.viewCart;
        let newCartState = !currCartState;
        this.setState({
            viewCart: newCartState
        })
    }

    render() {
        let cartView = null;

        if (this.state.viewCart) {
            cartView = (
                <article>
                    <header>
                        <h1>Items</h1>
                    </header>
                </article>
            )
        }

        let cartStyle = {

        };



        return (
            <Layout toggleCartView={this.toggleCartView.bind(this)} numItems={this.state.numOfItems}>
                <CartComponent
                    incNotify={this.incItems.bind(this)}
                    decNotify={this.decItems.bind(this)}
                />
                {cartView}
            </Layout>
        );
    }
}

export default App;
