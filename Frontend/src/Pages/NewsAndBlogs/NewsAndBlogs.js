import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import fImage from '../../Images/blog-banner.jpg'
import axios from 'axios'
import Slider from "react-slick";
import moment from 'moment/moment';
import { Link } from 'react-router-dom';
import { Pagination } from 'react-laravel-paginex';

function NewsAndBlogs() {

  const [newsfeeds, setNewsfeeds] = useState([])


  function getNewsfeeds() {
    const url = process.env.REACT_APP_API_URL
    axios.get(`${url}/newsfeeds/all`)
        .then(res => {
            console.log(res.data.newsfeeds)
            setNewsfeeds(res.data.newsfeeds)
        })
        .catch(err => {
            console.log(err)
        })
}

function getData(data) {
  const url = process.env.REACT_APP_API_URL
  axios.get(`${url}/newsfeeds/all?page=${data.page}`)
      .then(res => {
          console.log(res.data.newsfeeds)
          setNewsfeeds(res.data.newsfeeds)
      })
      .catch(err => {
          console.log(err)
      })
}

useEffect(() => {
    getNewsfeeds()
}, [])

const formatDate = (d1) => {
  const d2 = moment(d1).format("MMM D, yyyy")
  return d2
}

  return (
    <div>
        <Navbar />
        <div className="contact-bnner" style={{ backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${fImage})` }}>
        <div className="max-width">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8">
                <div className="contact-text">
                  <h1>News and Blogs</h1>
                  <p>
                    {/* We create the BEST OUT OF WASTE! Ecoil converts usedcooking oil
                    (UCO) into a green, sustainable biodiesel, keeping people healthy
                    and the environment safe! */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="heading text-center mb-5">
                            <h4> News & Blogs </h4>
                        </div>
                        {/* <Slider {...settings}>                             */}
                            
                            <div className='col-md-12'>
                              <div className='row'>
                              {newsfeeds && newsfeeds.data &&
                            newsfeeds.data.map((item, key) =>
                             <div key={key} className="col-md-4 p-2">
                                <div style={{ width: "100%", height: "220px", backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                                </div>
                                
                                <div className="blog-text mt-2 text-left">
                                    <h4>
                                        {item.name}
                                    </h4>
                                    <p>
                                        {formatDate(item.created_at)}
                                    </p>
                                    <p>
                                        {item.s_description}
                                    </p>

                                    <Link to={"/news-and-blogs/"+item.id}>READ MORE
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                             )}

                              </div>
                            </div>

                        {/* </Slider> */}


                        <div className="mt-4">
                            <Pagination changePage={getData} data={newsfeeds} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewsAndBlogs