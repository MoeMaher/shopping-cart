import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.component.css';
import mainClasses from '../../../App.css';

const iconStyle = {
    backgroundImage:'url(https://www.iconsdb.com/icons/preview/white/shopping-cart-xxl.png  )',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '38px',
    height: '38px',
}

const iconPosition = {
    marginRight: '1.7%',
    marginTop: 'auto',
    marginBottom: 'auto'
}


const layout = (props) => (
    <Aux>

        <div className={`${mainClasses["deep-shadow-background"]} ${classes.mainHeader}`}>
            <h1>SHOP</h1>
            <div style={iconPosition}>
                <div onClick={props.toggleCartView} style={iconStyle}><span className={classes.num}>{props.numItems}</span></div>
            </div>
        </div>


        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
