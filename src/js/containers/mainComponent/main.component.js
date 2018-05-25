/**
 * the mainComponent has the main state of the application
 * render the ListOfCards component and the listOfItems(cart) component
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { cartStore } from '../../stores/cartStore';
import { cartActions } from '../../actions/cartActions';
import { Product } from '../../stores/cart.es6'
import { ListOfCards } from "../../components/ListOfCards/list.of.cards.component";
import { ItemViewComponent } from "../../components/ItemsViewComponent/item.view.component";
import { getProducts } from "../../../productService";

class mainComponent extends Component {

    constructor(props) {
        super(props);
        // the state of the mainComponent
        this.state = {
            items: cartStore.getItems(),
            products: [],
            viewItems: props.viewItems,
        }
        // load the Products from the link
        this.getProds();
        this.incNotify = props.incNotify;
        this.decNotify = props.decNotify;
        this.setNotify = props.setNotify;
        this.setNotify(cartStore.getItems().length)
        cartStore.addChangeListener(this._onChange.bind(this));
    }

    getProds () {
        // loading the Products and updating the state
        let self = this;
        getProducts().then(res => {
            self.setState({products: res.data.data});
        })
    }

    addProductToCart(id, title, price, image){
        // firing an action of type ADD_ITEM to the dispatcher
        cartActions.addItem(new Product(id, title, price, image));
        this.incNotify();
    }

    _onChange(){
        // update the state.
        this.setState({
            items: cartStore.getItems(),
        });
        // update the itemsCount Notification on the nav-bar
        this.setNotify(cartStore.getItems().length)
    }

    ItemsComponentRef = null;

    setCartView(view){
        // getting the reference of the
        this.ItemsComponentRef = view;
    }

    render () {
        let itemsView = (<ItemViewComponent setCartView={this.setCartView.bind(this)} items={this.state.items}/>)
        if(this.state.viewItems()) {
            if (this.ItemsComponentRef) {
                // making the cart visible
                this.ItemsComponentRef.style.visibility = 'visible';
                this.ItemsComponentRef.style.width = '300px';
            }
        } else {
            if (this.ItemsComponentRef.style.width) {
                // making the cart invisible
                this.ItemsComponentRef.style.visibility = 'hidden';
                this.ItemsComponentRef.style.width = '0px';
            }
        }
        return (
            <Aux>
                {itemsView}
                <ListOfCards addProduct={this.addProductToCart.bind(this)} products={this.state.products}/>
            </Aux>
        );
    }
}

export default mainComponent;
