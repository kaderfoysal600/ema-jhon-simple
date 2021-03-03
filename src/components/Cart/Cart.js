import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    // const total = cart.reduce((total, prd) => total+ prd.price,0)
    let total = 0;
    for (let i=0; i<cart.length; i++){
        const product = cart[i]
        total = total + product.price;

    }

    let shipping = 0;
    if(total>35){
        shipping= 0;
    }
    else if(total>15){
        shipping = 4.99;
    }

    const tax = (total/10).toFixed(2);
    return (
        <div>
            <h3>Order summary</h3>
            <p>Items ordered {cart.length}</p>
            <p>product price : {total}</p>
            <p>Total price : {total+ shipping+tax}</p>
            <p><small>Shipping cost {shipping}</small></p>
            <p><small>Tax+ vat :{tax}</small></p>
        </div>
    );
};

export default Cart;