import React, { useEffect, useState } from "react";
import imgw from "../Images/w.jpg"
import img7 from "../Images/07.jpg"
import axios from "axios";
import LoaderIcon from "../Images/Loader/1496.gif"

function Testimonial() {

  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [review, setReview] = useState("")
  const [image, setImage] = useState(null)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [testimonials, setTestimonials] = useState([])
  const url = process.env.REACT_APP_API_URL

  const getTestimonials = () => {
    axios.get(`${url}/testimonials`)
    .then(res => {
            console.log(res.data.testimonials)
            setTestimonials(res.data.testimonials)
          })
    .catch(err => console.log(err))
  }

  const handleImageChange = (e) => {
    // setImage(URL.createObjectURL(e.target.files[0]))
    setImage(e.target.files[0])
  }

  const handleSubmit = () => {
    
   const formData = new FormData()
   formData.append("name", name)
   formData.append("company", company)
   formData.append("review", review)
   formData.append("image", image ?? "")

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    setLoading(true)

    axios.post(`${url}/testimonial`, formData, config)
      .then(res => {
        console.log(res.data)
        setLoading(false)
        setSuccess(true)
      })
      .catch(err => {  
        if(err.response.data.errors){
          var errors = err.response.data.errors
        setErrors(errors)
        setLoading(false)
        }
        else{
          alert("There are some unexpected errors");
        }
        
       })
  }

  useEffect(() => {
    getTestimonials();
  }, [])
  


  return (
    <div>
      <section className="coustomer-slide py-3">
        <div className="max-width">
          <div className="container">
            <div className="row py-5 align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="what-they-say px-5">
                  {/* <span>WHAT THEY SAY</span> */}
                  <h4>Testimonials</h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation
                  </p> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  id="carouselExampleDark"
                  className="carousel carousel-dark slide review-slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    {testimonials && testimonials.map((item, index) => 
                      <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={index}
                      className={`${index == 0 && 'active'}`}
                      aria-current={`${index == 0 && 'true'}`}
                      aria-label={`Slide ${index+1}`}
                    />
                    )}
                    
                    {/* <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={1}
                      aria-label="Slide 2"
                    />
                    <button
                      type="button"
                      data-bs-target="#carouselExampleDark"
                      data-bs-slide-to={2}
                      aria-label="Slide 3"
                    /> */}
                  </div>
                  <div className="carousel-inner">
                    {testimonials && 
                    <>
                    {testimonials.map((item, index, key) =>
                      <div
                      className={`carousel-item itemss ${index == 0 && 'active'}`}
                      data-bs-interval={10000}
                      key = {key}
                      style={{position: "relative", minHeight: "400px"}}
                    >
                      {/* <img src={imgw} className="w-100" alt="..." /> */}
                      <div className="carousel-caption  review-slide text-left"> 
                      {/* itemss-caption */}
                        <p className="text-left">
                          {item.review}
                        </p>
                        <div className="ceo_name pt-4 d-flex">
                          <div className="img">
                            {item.image &&
                            <img src={item.image} />
                          }
                          </div>
                          <div className="title text-left px-3">
                            <h4 className="mb-0">{item.name}</h4>
                            <p>{item.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    )}
                    
                    </>
                    }
                    
                  </div>



                </div>
                <div className="mt-2 center">
                  <button className="btn btn-header" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ paddingLeft: 12, paddingRight: 12 }} >
                    Leave a Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header" style={{ color: "#000" }}>
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Leave a Review{" "}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body text-left" style={{ color: "#000" }}>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    {" "}
                    Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your fullname"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <div className="text-danger">
                    {errors.name && errors.name[0]}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    {" "}
                    Company*{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Company Name"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                  <div className="text-danger">
                    {errors.company && errors.company[0]}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    {" "}
                    Logo{" "}
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Designation"
                   
                    onChange={handleImageChange}
                  />
                  <div className="text-danger">
                    {errors.image && errors.image[0]}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    {" "}
                    Your Review*{" "}
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Review"
                    defaultValue={" "}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <div className="text-danger">
                    {errors.review && errors.review[0]}
                  </div>
                </div>
              </form>
            </div>
            {loading && loading &&
            <div className="p-2">
              <img src={LoaderIcon} style={{width: "40px"}} />
            <span> Sending Data</span>

            </div>
            }

{success && success &&
            <div className="p-2 text-success">
              <i className="fa fa-check"></i>
            <span> Review Submitted Successfully. Close the window.</span>

            </div>
            }
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" onClick={() => handleSubmit()} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Testimonial;
