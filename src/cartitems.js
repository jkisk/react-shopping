import React from 'react'
import CartItem from './cartitem'

function CartItems(props) {
    return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {props.cartItemsList.map(item => {
                    return <CartItem
                        key={item.id}
                        product={item.product.name}
                        price={item.product.priceInCents}
                        quantity={item.quantity}
                    />

                })}
                {/* Items go here */}
            </div>
        </div>
    )
}

export default CartItems