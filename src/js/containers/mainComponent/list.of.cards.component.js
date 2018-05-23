import React from 'react';
import Aux from '../../hoc/Aux';
var CardComponent = require('../../components/Card/card.component').CardComponent;


export const ListOfCards = (props) => {

    return (
        <span>
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
