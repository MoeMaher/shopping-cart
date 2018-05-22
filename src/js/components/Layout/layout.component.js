import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './layout.component.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Cart</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;
