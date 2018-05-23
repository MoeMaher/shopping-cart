import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { cartStore } from '../../stores/cartStore';
import { cartActions } from '../../actions/cartActions';
import { Product } from '../../stores/cart.es6'
import { ListOfCards } from "./list.of.cards.component";
import { ItemViewComponent } from "./item.view.component";
import { getProducts } from "../../../productService";
import classes from './main.component.css';

class mainComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: cartStore.getItems(),
            products: [],
        }
        this.getProds();
        this.incNotify = props.incNotify;
        this.decNotify = props.decNotify;
    }

    getProds () {
        let self = this;
        getProducts().then(res => {
            console.log('downloaded');
            self.setState({products: res.data.data});
        })
    }

    addprod(id, title, price){
        cartActions.addItem(new Product(id, title, price));
        this.incNotify();
    }

    _onChange(){
        this.setState({
            items: cartStore.getItems()
        })
    }

    render () {
        console.log(this.state.items);
        let itemViewStyle = {
            // display: '', /* Hidden by default */
            position: 'fixed', /* Stay in place */
            zIndex: '3', /* Sit on top */
            paddingTop: '100px', /* Location of the box */
            right: '0',
            top: '0',
            width: '100%', /* Full width */
            height: '100%', /* Full height */
            overflow: 'auto', /* Enable scroll if needed */
            // backgroundColor: 'rgb(0,0,0)', /* Fallback color */
            backgroundColor: 'rgba(0,0,0,0.4)', /* Black w/ opacity */
            float: 'right'
    }
        let cardViewStyle = {
        };
        return (
            <Aux>
                <ListOfCards className={classes.left} addProduct={this.addprod.bind(this)} products={this.state.products}/>
                <ItemViewComponent className={itemViewStyle} items={this.state.items}/>
            </Aux>
        );
    }
}

export default mainComponent;
