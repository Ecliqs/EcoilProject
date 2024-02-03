import React, { createElement, useEffect, useState } from "react"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Overview from "../../Components/overview"
import RequestForOilCollection from '../../Components/RequestForOilCollection'
import Checkicon from '../../Images/Icon2/service-details-icon.png'
// import welcomeimg from '../../Images/welcome-img.jpg'
import welcomeimg from '../../Images/uco1.jpg'
import mobileapp from '../../Images/Icon/mobile-app.png'
import cooloil from '../../Images/Icon/cool-oil.png'
import drum from '../../Images/Icon/empty-drum.png'
import recyle from '../../Images/Icon/recyle.png'
// import Banner from '../../Images/usedcookoilbnnr.jpg'
import Banner from '../../Images/UCO-banner.jpg'
import Bg from '../../Images/BgCreate3.jpg'
import { useIsAuthenticated } from "react-auth-kit"
import { Link } from "react-router-dom"
import RFCSection from "../../Components/RFCSection"
import SEO from "../../SEO"
import { Helmet } from "react-helmet"


function Service1() {

    // set title 
    // document.title = "Ecoil | Uco Collection"

    const isAuthenticated = useIsAuthenticated()

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("UCO Collection").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    return (
        <div>
            <Navbar />

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>

            <div className="Single-service-one" style={{ backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${Banner})` }}>
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-10">
                                <div className="contact-text">
                                    <h1> Used Cooking Oil Collection</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Overview />

            <section className="industries-we-serve-3 industries-serve py-lg-5 py-3 mb-5" style={{ background: `url(${Bg})`, backgroundPosition: 'center', backgrounSize: 'cover' }}>
                <div className="max-width">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 pb-3">
                                <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                                    <div className="service-heading mb-3">
                                        <h4 className="mb-5">Process</h4>
                                    </div>
                                    <div className="service-body service-body1 pb-5 d-flex align-items-center">
                                        <div className="s-icon">
                                            <img src={mobileapp} />
                                        </div>
                                        <div className="service-text px-lg-4 px-3 text-left">
                                            <h4>Step 1</h4>
                                            <pc className="fs-5">
                                                Raise a request through mobile app, website or toll free
                                                number
                                            </pc>
                                        </div>
                                    </div>
                                    <div className="service-body service-body1 pb-5 d-flex align-items-center">
                                        <div className="s-icon s-icon2">
                                            <img src={cooloil} />
                                        </div>
                                        <div className="service-text px-lg-4 px-3 text-left">
                                            <h4>Step 2</h4>
                                            <p className="fs-5">Cool the oil and pour in the drum</p>
                                        </div>
                                    </div>
                                    <div className="service-body service-body1 pb-5 d-flex align-items-center">
                                        <div className="s-icon">
                                            <img src={drum} />
                                        </div>
                                        <div className="service-text px-4 text-left">
                                            <h4>Step 3</h4>
                                            <p className="fs-5">
                                                Ecoil team replaces the filled drum with empty drum for
                                                future use
                                            </p>
                                        </div>
                                    </div>
                                    <div className="service-body service-body1 pb-5 d-flex align-items-center">
                                        <div className="s-icon s-icon2">
                                            <img src={recyle} />
                                        </div>
                                        <div className="service-text px-4 text-left">
                                            <h4>Step 4</h4>
                                            <p className="fs-5">
                                                Your used cooking oil is sold and is ready to be recycled
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-ll pb-3">
                                <div className="industries-img">
                                    <img src={welcomeimg} className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="service-single-page-text-wrap">
                            <h2 className="advantages-heading text-center">
                                Advantages FBO's get on selling UCO to Ecoil
                            </h2>
                            {/* <p class="advantages-para">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                                    </p> */}
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                {/* 8 Icon Box Start */}
                                <div className="icon-box-wrap d-sm-flex mb-3">
                                    <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Earn Money</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Become fssai complaint</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Get Carbon Points</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Healthy Food to Customers</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="icon-box-wrap d-sm-flex mb-3">
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Contribution towards environment</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Traceability of Oil sold</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Data analysis</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center">
                                        <div className="bg-change-for-list-item-one">
                                            <div className="item-wrap">
                                                <div className="icon-image-div">
                                                    <img
                                                        src={Checkicon}
                                                        alt=""
                                                        className="icon-img"
                                                    />
                                                </div>
                                                <div className="icon-image-text">
                                                    <h2>Feedback from Ecoil</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* 8 Icon Box End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* {isAuthenticated() ?
                <RequestForOilCollection /> :
                <div>
                    <div className="container mt-5 mb-5">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="heading text-center mb-5">
                                    <h4> Request for oil collection </h4>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="heading text-center mb-5">
                                    <div className='text-muted'> Please Login to enable the "Request for Oil Collection" form </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{ textAlign: "center" }}>
                                <Link to="/login" className='btn btn-service'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            } */}

<RFCSection/>


            <Footer />
        </div>
    )
}

export default Service1