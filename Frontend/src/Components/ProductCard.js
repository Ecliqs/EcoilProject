import axios from 'axios'
import React, { useState } from 'react'
import { useAuthUser } from 'react-auth-kit'

function ProductCard({ product }) {

    const url = process.env.REACT_APP_API_URL
    const auth = useAuthUser()
    const [buttonText, setButtonText] = useState("Add To Cart")

    const changeButtonText = () => {
        // change after 1 second
        setTimeout(() => {
            setButtonText("Add to Cart")
        }, 1000)
    }

    // function to add product to cart
    const handleAddToCart = () => {
        setButtonText("Adding to Cart")
        axios.post(`${url}/cart/add-product`, { product_id: product.id, user_id: auth().id })
            .then(res => {
                console.log("product added to cart", res.data)
                setButtonText("Added to Cart")
                changeButtonText()
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <div className="col-lg-4 col-11 mb-5">
            <div style={{ width: "100%", height: "324px", borderRadius: "10px 10px 0px 0px", border: "1px solid rgba(0, 0, 0, 0.1)", borderBottom: "none" }}>
                {/* div with height and width 100% and background image */}
                <div style={{ backgroundImage: `url(${product.image})`, backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: "10px 10px 0px 0px", height: "100%", width: "100%" }}>

                </div>
            </div>
            <div className='product-details'>
                <div>
                    <h4>{product.name}</h4>
                </div>
                <div className="mt-2">
                    <p>Price : {product.price} Points</p>
                </div>
                <div>

                    <button onClick={handleAddToCart} className="btn btn-primary btn-track">
                        {buttonText == "Added to Cart" ? <> 
                            <i className='fa fa-check'></i> Added to Cart
                        </> : buttonText}
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ProductCard