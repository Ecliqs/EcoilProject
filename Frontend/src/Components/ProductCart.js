import React from 'react'
import ProductCartCard from './ProductCartCard'

function ProductCart({ cart, getTotalPrice, reloadCart }) {
    return (
        <div>
            {(cart && cart.length) ?
                <>

                    <div className="row">
                        <div className='col-md-12'>
                            {cart.map((cart1, index) => (
                                <ProductCartCard key={index} reloadCart={reloadCart} product={cart1} getTotalPrice={getTotalPrice} />
                            ))}


                        </div>


                    </div>
                </>
                :
                <>
                    <div className='text-muted small'>
                        Your Cart is Empty !!!
                    </div>
                </>
            }

        </div>
    )
}

export default ProductCart