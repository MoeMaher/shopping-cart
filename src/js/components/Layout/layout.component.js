import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.component.css';
import mainClasses from '../../../App.css';

// styling the icons
const cartIconStyle = {
    backgroundImage:'url(https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '38px',
    height: '38px',
}
const cartIconPosition = {
    marginRight: '1.7%',
    marginTop: 'auto',
    marginBottom: 'auto'
}


const layout = (props) => (
    <Aux>
        <div id={'side-nav'} className={`${mainClasses["deep-shadow-background"]} ${classes.mainHeader}`}>
            <h1>SHOP</h1>
            <div style={cartIconPosition}>
                <div onClick={props.toggleCartView} style={cartIconStyle}><span className={classes.num}>{props.numItems}</span></div>
            </div>
        </div>
        <div /*displaying the children of the layout which is the main application*/ className={classes.content}>
            {props.children}
        </div>
    </Aux>
)

export default layout;
