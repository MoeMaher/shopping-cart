import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './item.view.component.css';
import mainClasses from '../../../App.css';
import { cartStore } from '../../stores/cartStore';
import { cartActions } from '../../actions/cartActions';

var itemsRef = React.createRef();

export const ItemViewComponent = (props) => {
    console.log(props.items)

    return (
        <div  ref={(inp)=> props.setCartView(inp)} className={`${mainClasses["primary-color-background"]} ${classes.items}`}>
            <header>
                <h1>
                    Items
                <button style={{marginTop:'auto',marginBottom:'auto'}}>clear</button>
                </h1>
            </header>
            <body>
            <ul style={{padding: '0px'}}>
                {props.items.map((value) => {
                    let iconStyle = {
                        backgroundImage: 'url(' + value.getProduct().getImage() + ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '50px',
                        height: '50px',
                        marginRight: '10px',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    };
                    let addIconStyle = {
                        backgroundImage: 'url(https://image.flaticon.com/icons/svg/60/60740.svg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '20px',
                        height: '20px',
                        marginRight: '10px',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    };
                    let removeIconStyle = {
                        backgroundImage: 'url(https://png.icons8.com/ios/1600/minus.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '20px',
                        height: '20px',
                        marginLeft: '10px',
                        marginTop: 'auto',
                        marginBottom: 'auto'
                    };
                    return (
                        <li style={{display: 'flex'}}>
                            <div style={iconStyle} />
                            <div     style={{marginTop: 'auto', marginBottom: 'auto', marginRight: 'auto'}}>
                                <h4>{value.getProduct().getName()}</h4>
                                <p>  price: {value.getPrice()}</p>
                            </div>
                            <div style={{marginTop: 'auto', marginBottom: 'auto', display: 'flex'}}>
                                <a onClick={()=> {cartActions.addItem(value.getProduct())}} href={'#'}>
                                    <div style={addIconStyle} />
                                </a>
                                <a> {value.getCount()}</a>
                                <a onClick={()=> {cartActions.removeItem(value.getProduct())}} href={'#'}>
                                    <div style={removeIconStyle} />
                                </a>
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </li>
                    )

                })}
            </ul>
            </body>
            <footer>
                <h4>Total Price: {cartStore.getTotal()}</h4>
            </footer>
        </div>


    );
}
