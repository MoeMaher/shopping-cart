/**
 * component listing the cards given list of products.
 */

import React from 'react';
import { CardComponent } from '../Card/card.component';


export const ListOfCards = (props) => {

    return (
        <span style={{textAlign: 'center', display: 'table'}} className={{marginTop: '150px'}} >
            {props.products.map((value) => {
                return (
                    <CardComponent
                        onAdd={props.addProduct}
                        title={value.title}
                        description={value.description}
                        image={value.image}
                        price={value.price}
                        id={value.id}
                        key={value.id}
                    />
                )
            })}
        </span>
    )
}
