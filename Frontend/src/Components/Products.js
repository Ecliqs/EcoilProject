import React, { useEffect, useState } from 'react'
import pro1 from "../Images/p1.jpg"
import pro2 from "../Images/p4.jpg"
import pro3 from "../Images/p3.webp"
import axios from 'axios'
import ProductCard from './ProductCard'
import Loader from "../Images/Loader/loader.gif"
import { Link } from 'react-router-dom'


function Products() {

  // function to get all products from api using axios
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [links, setLinks] = useState([])

  const url = process.env.REACT_APP_API_URL
  const getProducts = () => {
    setLoading(true)
    axios.get(`${url}/products`)
      .then(res => {
        console.log("Products", res.data.products.data)
        setProducts(res.data.products.data)
        setLinks(res.data.products.links)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  // make a function to handle link click

  const handleLink = (link) => {
    setLoading(true)
    axios.get(`${link}`)
      .then(res => {
        console.log("Products", res.data.products.data)
        setProducts(res.data.products.data)
        setLinks(res.data.products.links)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }


  // call the function to get all products with useeffect
  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      <div className="products-list py-5 ">
        {/* <div class="process-path pt-5 pb-4" >

        </div> */}
        <div className="max-width">
          <div className="container mb-3">
            <div className="row justify-content-center align-items-center">
              <div class="col-lg-12 mb-5">
                <h2 class="requestoil-collection"> Products </h2>
              </div>
              {/* <div className="col-lg-4 col-11 mb-5">
                <div className="products-inner mt-5">
                  <div className="products-img">
                    <img src={pro1} alt="image" />
                  </div>
                  <div className="products-text text-center">
                    <h4>Cello</h4>
                    <p>Price : 200 Points</p>
                    <div className="button">
                      <a href="#">
                        <button className="btn btn-primary btn-track">
                          Add To Cart
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-11 mb-5">
                <div className="products-inner mt-5">
                  <div className="products-img">
                    <img src={pro2} alt="image" />
                  </div>
                  <div className="products-text text-center">
                    <h4>Milton</h4>
                    <p>Price : 200 Points</p>
                    <div className="button">
                      <a href="#">
                        <button className="btn btn-primary btn-track">
                          Add To Cart
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}


              {/* map products */}
              {products &&
                products.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
              }
              <div style={{ textAlign: "right",height:"30px" }}>
                {loading &&
                <div>
                  <img src={Loader} style={{ width: "30px", height: "30px" }} />
                Loading New Products
                </div>
}
              </div>
              <div className='col-lg-12' style={{ marginTop: "12px", textAlign: "right", display: "flex", justifyContent: "flex-end" }}>
                {/* bootstrap pagination */}


                <ul class="pagination">

                  {/* map links */}
                  {links &&
                    <>
                      {links.map((link, index) => (
                        <>
                          {link.active ?
                            <li class="page-item"><button class="page-link active" onClick={() => handleLink(link.url)}>
                              {link.label == "&laquo; Previous" ? "Previous" : link.label == "Next &raquo;" ? "Next" : link.label}

                            </button></li>
                            :
                            <>
                              {link.url ?
                                <li class="page-item"><button class="page-link" onClick={() => handleLink(link.url)}>
                                  {link.label == "&laquo; Previous" ? "Previous" : link.label == "Next &raquo;" ? "Next" : link.label}
                                </button></li>
                                :
                                <li class="page-item disabled"><button class="page-link" href="#">
                                  {link.label == "&laquo; Previous" ? "Previous" : link.label == "Next &raquo;" ? "Next" : link.label}
                                </button></li>

                              }
                            </>

                          }

                        </>
                      ))}
                    </>
                  }
                </ul>


                
              </div>
              <div className='col-lg-12' style={{textAlign:"right"}}>
                  <div>
                  <Link to="/dashboard/cart" className='btn btn-primary btn-track'>My Cart</Link>
                </div>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products