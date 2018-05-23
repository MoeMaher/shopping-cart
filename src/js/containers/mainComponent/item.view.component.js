import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './item.view.component.css';

export const ItemViewComponent = (props) => {


    return (
        <div className={classes.card}>
           <header>
                <h1>title</h1>
            </header>
            <div>
                <p>desc</p>
            </div>

            <footer>
                <h4>price: 100</h4>
            </footer>

        </div>


    );
}
