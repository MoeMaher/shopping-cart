import React from 'react';
import Aux from '../../hoc/Aux';
import classes from  './card.component.css';


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
            <h4>price: {props.price}</h4>
            <button onClick={()=> {props.onAdd(props.id, props.title, props.price)}}>add</button>
        </footer>

    </div>

    );
}
