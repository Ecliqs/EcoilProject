import axios from 'axios'
import React, { useState } from 'react'

function ProductCartCard({ product, getTotalPrice, reloadCart }) {
    const [quantity, setQuantity] = useState(product.quantity)
    const url = process.env.REACT_APP_API_URL

    const incrementQuantity = () => {
        var newQuantity = quantity + 1
        setQuantity(newQuantity)
        axios.put(`${url}/cart/quantity/increment`, { cart_id: product.id })
        .then(res => {
            console.log(res.data)
            getTotalPrice()
        })
        .catch(err => {
            console.log(err)
        })
    }

    const decrementQuantity = () => {
        if(quantity >= 1)
        {
            var newQuantity = quantity - 1
            setQuantity(newQuantity)
            axios.put(`${url}/cart/quantity/decrement`, { cart_id: product.id })
            .then(res => {
                console.log(res.data)
                getTotalPrice()
            })
            .catch(err => {
                console.log(err)
            })
        }
       
    }

    const removeProduct = () => {
        axios.delete(`${url}/cart/remove-product?cart_id=${product.id}`)
        .then(res => {
            console.log(res.data)
            reloadCart()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className='card mb-2'>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div style={{ width: "100%", maxWidth: "120px", border: "1px solid rgb(0, 0, 0, 0.75)", height: "120px", borderRadius: "10px", backgroundImage: `url(${product.product.image})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>

                            </div>
                        </div>

                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <h5>{product.product.name}</h5>
                                    <p>Price : {product.product.price} Points</p>
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div className='col-md-3'>
                                    <div style={{ display: "flex", }}>
                                        {quantity <= 1 ? 
                                        <button onClick={decrementQuantity} className='btn btn-sm' disabled>-</button>
                                        :
                                        <button onClick={decrementQuantity} className='btn btn-primary btn-sm'>-</button>
                                    }
                                        <div style={{ padding: "0px 30px", textAlign: "center" }}>
                                            {quantity}
                                        </div>
                                      
                                        <button onClick={incrementQuantity} className='btn btn-primary btn-sm'>+</button>
                                        
                                    </div>
                                </div>

                                <div className='col-md-5'>
                                    <span style={{ fontSize: "16px" }}>Total Price : {quantity * product.product.price} Points</span>
                                </div>

                                <div className='col-md-4' style={{ textAlign: "right" }}>
                                    <button onClick={removeProduct} className='btn btn-danger btn-sm'>
                                        {/* fa fa-trash */}
                                        <i className='fa fa-trash'></i> &nbsp;
                                        <span style={{fontSize: "12px"}}>Remove Product</span>
                                    </button>
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCartCard