/**
 * Items/Cart Component form a list of items that are in the cart.
 */

import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './item.view.component.css';
import mainClasses from '../../../App.css';
import { cartStore } from '../../stores/cartStore';
import { cartActions } from '../../actions/cartActions';

var itemsRef = React.createRef();

export const ItemViewComponent = (props) => {
    // styles of the icons
    let productIconStyle = {
        // bachgroundImage: will be added later.
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '50px',
        borderRadius: '50%',
        height: '50px',
        marginRight: '10px',
        marginTop: 'auto',
        marginBottom: 'auto'
    };
    let addBtnIconStyle = {
        backgroundImage: 'url(https://res.cloudinary.com/nawwar/image/upload/v1527196337/add.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '20px',
        height: '20px',
        marginRight: '10px',
        marginTop: 'auto',
        marginBottom: 'auto'
    };
    let removeBtnIconStyle = {
        backgroundImage: 'url(https://res.cloudinary.com/nawwar/image/upload/v1527196337/sub.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '20px',
        height: '20px',
        marginLeft: '10px',
        marginTop: 'auto',
        marginBottom: 'auto'
    };
    return (
        <div
        // taking a reference of this div for visibility control later
        ref={(inp) => props.setCartView(inp)}
        // compining 2 css classes
        className={`${mainClasses["primary-color-background"]} ${classes.items}`}
        >
            <header>
                <h1>
                    Items
                    <button onClick={cartActions.clearCart} style={{marginTop: 'auto', marginBottom: 'auto'}}>
                        clear
                    </button>
                </h1>
            </header>

            <body>
                <br/>
                <ul style={{padding: '0px'}}>
                    {/*displaying the list of items*/}
                    {props.items.map((item) => {
                        // adding the url to the styling of this item
                        productIconStyle.backgroundImage = 'url(' + item.getProduct().getImage() + ')';
                        return (
                            <Aux>
                                <li style={{display: 'flex'}}>
                                    <div /* the product icon */ style={productIconStyle}/>
                                    <div /* product info */ style={{marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto'}}>
                                        <h4>{item.getProduct().getName()}</h4>
                                        <p> price: {item.getPrice()}</p>
                                    </div>
                                    <div /* the count (add/remove) Icons */ style={{marginTop: 'auto', marginBottom: 'auto', display: 'flex'}}>
                                        <a /* Add icon */ onClick={() => { cartActions.addItem(item.getProduct()) }} href={'#'}>
                                            <div style={addBtnIconStyle}/>
                                        </a>
                                        <a> {item.getCount()}</a>
                                        <a /* Sub icon */ onClick={() => { cartActions.removeItem(item.getProduct()) }} href={'#'}>
                                            <div style={removeBtnIconStyle}/>
                                        </a>
                                    </div>
                                </li>
                                <br/>
                                <br/>
                            </Aux>
                        )
                    })}
                </ul>
            </body>
            <footer>
                <h4>Total Price: {cartStore.getTotal()}</h4>
            </footer>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>


    );
}
