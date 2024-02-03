import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Overview from "../../Components/overview";
import RequestForOilCollection from "../../Components/RequestForOilCollection";
// import Banner from "../../Images/greenfuelnewbanner.jpg";
import Banner from "../../Images/green-fuel-supply-banner.jpg";
import Checkicon from '../../Images/Icon2/service-details-icon.png'
import call from '../../Images/Icon/call.png'
import Web from '../../Images/Icon/web.png'
import { Link } from "react-router-dom";
import Appointment from "../../Components/Appointment";
import Office from "../../Images/Icon/office.png"
import Email from "../../Images/Icon/email.png"
import Call from "../../Images/Icon/call.png"
// import img5 from "../../Images/05.jpg"
import img5 from "../../Images/Contact-us.jpg"
import SEO from "../../SEO";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createElement } from "react";

function Service2(){

    // set title 
    // document.title = "Ecoil | Green Fuel Supply"

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Green fuel Supply").then(res => setTags(res))
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

            <div className="Single-service-two" style={{backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${Banner})`, backgroundPosition: 'bottom', backgrounSize: 'cover'}}>
                <div className="max-width">
                    <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8">
                        <div className="contact-text">
                            <h1>Supply of Green fuel</h1>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </p> */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <Overview page="service2"  />

            <section className="who-we-are py-lg-5 py-3 mb-5">
                <div className="max-width">
                    <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-5">
                        <div className="heading2">
                            <h4>How you can purchase Biodiesel</h4>
                            <p>
                            You can purchase Biodiesel by calling our toll free number or
                            submitting a request on our webiste.
                            </p>
                        </div>
                        </div>
                        <div className="col-lg-3 pb-5">
                        <div className="our-mission px-4 py-4">
                            <div className="mission-icon pb-3">
                            <img src={call} id="page-2-icon-size-one" />
                            </div>
                            <div className="our-mission-text">
                            <h4>Toll Free number</h4>
                            <p>
                                <a
                                href="tel:18008903841"
                                className="btn btn-service"
                                style={{ background: "#057931", width: "100%" }}
                                >
                                <i className="fa fa-phone" /> 18008903841
                                </a>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 pb-5">
                        <div className="our-mission missions px-4 py-4">
                            <div className="mission1-icon pb-3">
                            <img src={Web} id="page-2-icon-size-two" />
                            </div>
                            <div className="our-mission-text">
                            <h4>Enquiry on website</h4>
                            <p>
                                <Link
                                to="/contact-us"
                                className="btn btn-service"
                                style={{ width: "100%" }}
                                >
                                <i className="fa fa-envelope" /> Contact Us
                                </Link>
                            </p>
                            </div>
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
                        Advantages of using Biodiesel
                        </h2>
                        {/* <p class="advantages-para">
                        Biodiesel is a renewable and clean-burning fuel that is made from waste vegetable oils, animal fats, or recycled restaurant grease for use in diesel vehicles. Biodiesel produces less toxic pollutants and greenhouse gases than petroleum diesel.

                    </p>
                    <p class="advantages-para">
                        One of the main advantages of using biodiesel is that it can be used in existing diesel engines with little or no modifications at all and can replace fossil fuels to become the most preferred primary transport energy source.
                    </p>
                    <p class="advantages-para">
                        Fossil fuels, when burnt, release greenhouse gases like carbon dioxide in the atmosphere that raises the temperature and causes global warming. To protect the environment from further heating up, many people have adopted the use of biofuels.
                    </p>
                    <p class="advantages-para">
                        Fossil fuels are limited and may not be able to fulfill our demand for coal, oil and natural gas after a certain period. Biodiesel can work as an alternative form of fuel and can reduce our dependence on foreign suppliers of oil as it is produced from domestic energy crops.
                    </p> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        {/* 8 Icon Box Start */}
                        <div className="icon-box-wrap d-sm-flex justify-content-center mb-3">
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
                                    <h2>UCO based green fuel</h2>
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
                                    <h2>90% lower Sulphur and Carbon Emission</h2>
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
                                    <h2>Earth Friendly</h2>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* <div class="col-sm-3 col-md-3 col-lg-3 col-xl-3 text-center">
                            <div class="bg-change-for-list-item-one">
                            <div class="item-wrap">
                                <div class="icon-image-div">
                                <img
                                    src={Checkicon}
                                    alt=""
                                    class="icon-img"
                                />
                                </div>
                                <div class="icon-image-text">
                                <h2>Reduce CO2 Emission</h2>
                                </div>
                            </div>
                            </div>
                        </div> */}
                            {/* 8 Icon Box End */}
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        {/* 8 Icon Box Start */}
                        <div className="icon-box-wrap d-sm-flex justify-content-center mb-3">
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
                                    <h2>Biodegradable</h2>
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
                                    <h2>Reduce CO2 Emission</h2>
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
                                    <h2>Renewable and clean burning fuel</h2>
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
            </div>

            {/* <RequestForOilCollection /> */}

            <section id="appointment" className="contact-section py-5">
                <div className="max-width text-left">
                    <div className="contain shadow px-lg-5 py-lg-5 px-2 py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 pb-3 d-lg-block d-md-none d-sm-none d-none">
                                    <Appointment />
                                </div>
                                <div className="col-lg-4 pb-3">
                                    <div className="contact-info px-3 py-4" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.873), rgba(0, 0, 0, 0.91)), url(${img5})`, backgroundPosition: 'center', backgrounSize: 'cover'  }} >
                                        <div className="heading p-4">
                                            <h5>Contact Info</h5>
                                            {/* <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit sed do
                                eiusmod
                                </p> */}
                                        </div>
                                        <div className="service-body service-body1 d-flex mb-4">
                                            <div className="s-icon" style={{ width: "auto", height: "fit-content" }}>
                                                <img src={Office} style={{ width: "50px", height: "auto" }} />
                                            </div>
                                            <div className="service-text px-4">
                                                <h4>Our Office</h4>
                                                <p>
                                                    {" "}
                                                    B-004,Plot no. 132,Rajendra Nagar, Sirsi road, Jaipur,
                                                    Rajasthan-302021
                                                </p>
                                            </div>
                                        </div>
                                        <div className="service-body service-body2 mb-4 d-flex">
                                            <div className="s-icon s-icon2" style={{ width: "auto", height: "fit-content" }}>
                                                <img src={Email} style={{ width: "50px", height: "auto" }} />
                                            </div>
                                            <div className="service-text px-4">
                                                <h4>Mail Us</h4>
                                                <p>ecoil.purchase@gmail.com</p>
                                            </div>
                                        </div>
                                        <div className="service-body service-body3 mb-4 d-flex">
                                            <div className="s-icon" style={{ width: "auto", height: "fit-content" }}>
                                                <img src={Call} style={{ width: "50px", height: "auto" }} />
                                            </div>
                                            <div className="service-text px-4">
                                                <h4>Phone Number</h4>
                                                <p>18008903841</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    )
}
export default Service2;