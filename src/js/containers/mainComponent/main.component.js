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
            viewCart: props.viewCart
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

    addprod(id, title, price, image){
        cartActions.addItem(new Product(id, title, price, image));
        this.incNotify();
    }

    _onChange(field, value){

        this.setState({
            items: cartStore.getItems(),
            // viewCart: false
        })
    }

    render () {
        console.log(this.state.items);

        let itemView = null;
        if(this.state.viewCart()) {
            itemView = (<ItemViewComponent items={this.state.items}/>)
        }
        return (
            <Aux>
                {itemView}
                <ListOfCards addProduct={this.addprod.bind(this)} products={this.state.products}/>
            </Aux>
        );
    }
}

export default mainComponent;
