import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import fImage from "../../Images/blog-banner.jpg"
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import parse from 'html-react-parser';


function NewsAndBlogDetails() {

  const {id} = useParams()

  const [newsfeed, setNewsfeed] = useState([])


  function getNewsfeed() {
    const url = process.env.REACT_APP_API_URL
    axios.get(`${url}/newsfeeds/show?id=${id}`)
        .then(res => {
            console.log(res.data.news)
            setNewsfeed(res.data.news)
        })
        .catch(err => {
            console.log(err)
        })
  }

  useEffect(() => {
    getNewsfeed()
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

{newsfeed &&
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-5">
            <div style={{width: "100%", height: "600px", backgroundImage: ` url(${newsfeed.image})`, backgroundPosition: 'center', backgrounSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            </div>

          </div>

          <div className="col-md-12 mt-5" style={{textAlign: "left"}}>
            <h4>
              { newsfeed.name }
            </h4>
          </div>

          <div className="col-md-12 mt-2" style={{textAlign: "left"}}>
            <p>
              <strong>{ formatDate(newsfeed.created_at) }</strong>
            </p>
          </div>

          <div className="col-md-12 mt-2" style={{textAlign: "left"}}>
            <p>
              {newsfeed && newsfeed.description &&
              <>
              { parse(newsfeed.description) }              
              </>
              }
            </p>
          </div>
          <div className="mt-4"></div>
        </div>
      </div>
      }
    </div>
  )
}

export default NewsAndBlogDetails