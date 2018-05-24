import React from 'react';
import Aux from '../../hoc/Aux';
import classes from  './card.component.css';
import mainClasses from '../../../App.css';


export const CardComponent = (props) => {
    let imgStyle = {
        backgroundImage: 'url('+props.image+')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '300px'
    }

    return (

    <div className={classes.card}>

        <header>
            <h1>{props.title}</h1>
        </header>


        <div>
            <div style={imgStyle} />
            <p>{props.description}</p>
        </div>

        <footer>
            <li style={{listStyleType: 'none'}}>
                <h4 style={{display: 'flex'}}><a style={{margin: 'auto', marginLeft:'0px'}} ><a className={mainClasses["accent-color"]}>price: </a> {props.price}</a>
                <button onClick={()=> {props.onAdd(props.id, props.title, props.price, props.image)}}>Add to Cart</button>
                </h4>
            </li>
        </footer>

    </div>

    );
}
