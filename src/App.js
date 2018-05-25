import React, { Component } from 'react';
import './App.css';
import MainComponent from './js/containers/mainComponent/main.component'
import Layout from './js/components/Layout/layout.component';

class App extends Component {
    constructor(props) {
        super(props);
        // the state of the App
        this.state = {
            numOfItems: 0,  // Number of Items for the notification icon in the header
            viewItems: true  // Boolean if the ItemsView is visible or not
        }
    }

    incItems() {
        // incrementing the numOfItems in the state
        let prevNum = this.state.numOfItems;
        let updatedNum = prevNum + 1;
        this.setState({numOfItems: updatedNum});
    }

    decItems() {
        // decrementing the numOfItems in the state
        let prevNum = this.state.numOfItems;
        let updatedNum = prevNum + 1;
        this.setState({numOfItems: updatedNum});
    }

    setNumOfItems(num) {
        this.setState({numOfItems: num});
    }

    toggleCartView() {
        //toggle the boolean viewItems to to make the component visible/invisible.
        let currCartState = this.state.viewItems;
        let newCartState = !currCartState;
        this.setState({
            viewItems: newCartState
        })
    }

    getViewItems() {
        return this.state.viewItems;
    }

    render() {
        // the main render of the application
        return (
            // the layout of the application passing the mainComponent as a children to it
            <Layout toggleCartView={this.toggleCartView.bind(this)} numItems={this.state.numOfItems}>
                <MainComponent
                    // the main component of the Application (cart)
                    viewItems ={this.getViewItems.bind(this)}
                    incNotify={this.incItems.bind(this)}
                    decNotify={this.decItems.bind(this)}
                    setNotify={this.setNumOfItems.bind(this)}
                />
            </Layout>
        );
    }
}

export default App;
