import React from 'react';

export default function Product(props) {
    let { product_name, product_price, img_url } = props.item

    return (
        <div>
            <div>{img_url}</div>
            <div>
                <h1>{product_name}</h1>
                <p>{product_price}</p>
            </div>
        </div>
    )
}