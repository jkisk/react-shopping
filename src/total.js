import React, { Component } from 'react'


class Total extends Component {
    constructor(props) {
        super(props)

    }
    totalUp = () => {
        let total = 0
        for (let i = 0; i < this.props.cartItemsList.length; i++) {
            let subTotal = this.props.cartItemsList[i].product.priceInCents * this.props.cartItemsList[i].quantity
            total += subTotal / 100
        }
        return `$${total.toFixed(2)}`
    }

    render() {
        return (
            <div>
                Total = {this.totalUp()}
            </div>
        )
    }
}




export default Total