import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product">
            <div>
                <h2 className="product-name">{name}</h2>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemove(key)} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;