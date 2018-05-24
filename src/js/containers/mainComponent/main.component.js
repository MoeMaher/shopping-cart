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
            viewCart: props.viewCart,
        }
        this.getProds();
        this.incNotify = props.incNotify;
        this.decNotify = props.decNotify;
        cartStore.addChangeListener(this._onChange.bind(this));
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

    _onChange(){

        this.setState({
            items: cartStore.getItems(),
        })
    }

    cartView = null;

    setCartView(view){
        this.cartView = view;
    }

    render () {
        console.log(this.state.items);



        let itemView = (<ItemViewComponent setCartView={this.setCartView.bind(this)} items={this.state.items}/>)
        console.log('viewCart')
        console.log(this.state.viewCart())
        if(this.state.viewCart()) {
            if (this.cartView) {
                console.log('changing')
                this.cartView.style.visibility = 'visible';
                this.cartView.style.width = '300px';
                // this.cartView.style.display = 'block';
            }
        } else {
            console.log('can close')
            if (this.cartView.style.width) {
                console.log('will cloase')
                this.cartView.style.visibility = 'hidden';
                this.cartView.style.width = '0px';
                // this.cartView.style.display = 'none';

            }
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
