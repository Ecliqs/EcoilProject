import React from "react"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
// import contact from "../../Images/contact.jpg"
// import f3 from "../../Images/f-min.jpg"
import Appointment from "../../Components/Appointment"
import f3 from "../../Images/Contact-us.jpg"
import contact from "../../Images/contact-us-banner.jpg"
import SEO from "../../SEO"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { createElement } from "react"



function Contact(){

    // set title 
    // document.title = "Ecoil | Contact Us"

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Contact Us").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    return(
        <div>
            <Navbar />

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>
            
                <div className="contact-bnner-new" style={{backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${contact})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                    <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                            <div className="contact-text">
                            <h1>Contact Us</h1>
                            <p>
                                Looking to sell Used Cooking Oil or purchase biodiesel? We can
                                help you. Get in touch now!
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="contact-dtl py-5">
                    <div className="max-width">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-4 pt-5 pb-3">
                            <div className="contact-dtl-inner text-center shadow py-5">
                            <i className="fa-solid fa-location-dot mb-2" />
                            <h4>Office Location</h4>
                            <p className="text-black-50 px-5">
                                B-004,Plot no. 132,Rajendra Nagar, <br /> Sirsi road, Jaipur,
                                Rajasthan-302021
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5 pb-3">
                            <div className="contact-dtl-inner cont-inner text-center shadow py-5">
                            <i className="fa-solid fa-phone-volume mb-2" />
                            <h4>Give Us A Call</h4>
                            <p>
                                18008903841
                                <br />
                                &nbsp;
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-5 pb-3">
                            <div className="contact-dtl-inner text-center shadow py-5">
                            <i className="fa-regular fa-envelope mb-2" />
                            <h4>Send Us A Message</h4>
                            <p className="text-black-50">
                                ecoil.purchase@gmail.com
                                <br />
                                &nbsp;
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="contact-dtl py-5">
                    <div className="max-width">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-6">
                            <img src={f3} className="w-100" />
                        </div>
                        <div className="col-lg-6 cont-sec">
                            <Appointment />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d889.6822724893004!2d75.757638!3d26.880347!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4f82a8936c9%3A0x7ae825098639dc70!2sECOIL!5e0!3m2!1sen!2sin!4v1687867350190!5m2!1sen!2sin"
                        className="w-100"
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        />
                </div>

            <Footer />
        </div>
    )
}

export default Contact