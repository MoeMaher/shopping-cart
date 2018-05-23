import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.component.css';

const iconStyle = {
    backgroundImage:'url(http://icons.iconarchive.com/icons/iconsmind/outline/256/Shopping-Cart-icon.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '38px',
    height: '38px'
}

const iconPosition = {
    marginRight: '1.7%',
    marginTop: 'auto',
    marginBottom: 'auto'
}


const layout = (props) => (
    <Aux>

        <div className={classes.mainHeader}>
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
