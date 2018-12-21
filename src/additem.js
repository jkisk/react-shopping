import React, { Component } from 'react'
import shortId from 'shortid'


class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newItem: ''
        }
    }
    handleChange = (event) => {

        this.setState({
            newItem: {
                ...this.state.newItem,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const addProduct = this.props.products.find(p => (p.id == this.state.newItem.product))
        const item = {
            id: shortId.generate(),
            product: addProduct,
            quantity: this.state.newItem.quantity
        }
        this.props.addCartItem(item)
        this.setState({
            newItem: ''
        })

    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>

                <p>
                    <label>
                        Quantity:
                        <input type="text" name="quantity" value={this.state.newItem.quantity} onChange={this.handleChange} />
                        <br />
                        Product:
                        <select name="product" onChange={this.handleChange}>
                            {
                                this.props.products.map(p => {
                                    return <option value={p.id}>{p.name}</option>
                                })
                            }
                        </select>
                        <br />
                        <input type="submit" value="Add Item to Cart" />
                    </label>

                </p>
            </form>
        )
    }
}

export default AddItem