import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import { cartStore } from '../../stores/cartStore';
import { cartActions } from '../../actions/cartActions';
import { Product } from '../../stores/cart.es6'


class cartComponent extends Component {

    render () {
        let prod = new Product('1', 'maher', 10);
        cartActions.addItem(prod);
        console.log(cartStore.getItems());
        return (
            <Aux>
                <div>Cart</div>
                <div>Cart Controllers</div>
            </Aux>
        );
    }
}

export default cartComponent;
