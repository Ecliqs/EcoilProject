import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Overview from "../../Components/overview";
import RequestForOilCollection from "../../Components/RequestForOilCollection";
// import Banner from "../../Images/chefworkbanner.jpg";
import Banner from "../../Images/FBC.jpg"
import certificate from "../../Images/certificates.png";
import license from "../../Images/license.png";
import testing from "../../Images/testing.png";
import medicaltesting from "../../Images/medicaltesting.png";
import training from "../../Images/training.png";
import business from "../../Images/business_compliance.png";
import greenbg from '../../Images/BgCreate2.jpg'

import Office from "../../Images/Icon/office.png"
import Email from "../../Images/Icon/email.png"
import Call from "../../Images/Icon/call.png"
import img5 from "../../Images/Contact-us.jpg"
import Appointment from "../../Components/Appointment";
import SEO from "../../SEO";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createElement } from "react";


function Service3(){

    // set title 
    // document.title = "Ecoil | Food Business Compliance Solution"

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

            <div className="Single-service-three" style={{backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${Banner})`, backgroundPosition: 'center', backgrounSize: 'cover'}}>
                <div className="max-width">
                    <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-10">
                        <div className="contact-text">
                            <h1>Food Business Compliance Solution</h1>
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

            <Overview page="service3" />

            <section className="industries-we-serve-2 industries-serve py-lg-5 py-3" style={{background:`url(${greenbg})`, backgroundPosition: 'center', backgrounSize: 'cover' }}>
                <div className="max-width">
                    <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 pb-3">
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                            <div className="service-heading mb-5 ">
                            {/* <span>INDUSTRIES</span> */}
                            <h4 style={{ fontSize: 30 }}>
                                Food Business Services We Cater To
                            </h4>
                            {/* <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.
                            </p> */}
                            </div>
                            <div className="service-body service-body1 pb-3 d-flex mb-4 align-items-lg-start text-justify">
                            <div className="s-icon p-2 ">
                                <img src={certificate} style={{ width: 120 }} />
                            </div>
                            <div className="service-text px-lg-4 px-3">
                                <h4>Certificates</h4>
                                <p>
                                Ecoil helps in managing certificates for particular sites by
                                vendors. Automated email, SMS notifications are sent to the
                                vendors about the expiry of the certificates to help them keep
                                track of them and renewed on time
                                </p>
                            </div>
                            </div>
                            <div className="service-body service-body2 pb-3 mb-4 d-flex align-items-lg-start text-justify">
                            <div className="s-icon s-icon2 p-2">
                                <img src={license} style={{ width: 120 }} />
                            </div>
                            <div className="service-text px-lg-4 px-3">
                                <h4>Licenses</h4>
                                <p>
                                Ecoil helps in tracking the required licenses for all outlets
                                of a restaurant owner. They are notified about expiry or
                                renewal through automated messages so that they can manage
                                them on time.
                                </p>
                            </div>
                            </div>
                            <div className="service-body service-body3 mb-4 d-flex align-items-lg-start text-justify">
                            <div className="s-icon p-2">
                                <img src={testing} style={{ width: 120 }} />
                            </div>
                            <div className="service-text px-4">
                                <h4>Testing</h4>
                                <p>
                                Mandatory Tests have been added by Ecoil admin, making it a
                                drop-down list for easy selection for the vendors. Vendor will
                                be able to view list of all the tests and can select one or
                                more tests if vendor wishes Ecoil to manage these tests for
                                them.
                                </p>
                            </div>
                            </div>
                            <div className="service-body service-body2 pb-3 mb-4 d-flex align-items-lg-start">
                            <div className="s-icon s-icon2 p-2">
                                <img src={medicaltesting} style={{ width: 120 }} />
                            </div>
                            <div className="service-text px-lg-4 px-3 text-justify">
                                <h4>Medical Testing</h4>
                                <p>
                                Some of the employees in food business are required to go for
                                regular Medical Testing. Ecoil app helps in tracking the
                                medical tests required and comply with them on time.The tests
                                are added by the admin which consists of Name, Ideal Frequency
                                and Cost Infofrmation, vendor can add his employee name and
                                details in the system Here for single test, they can have
                                multiple employees, so here after selecting the Test, vendor
                                has to select employees also. Automated messages are sent to
                                remind about the tests that are about to expire.
                                </p>
                            </div>
                            </div>
                            <div className="service-body service-body3 mb-4 d-flex align-items-lg-start">
                            <div className="s-icon p-2">
                                <img src={training} style={{ width: 120 }} />
                            </div>
                            <div className="service-text px-4 text-justify">
                                <h4>Training</h4>
                                <p>
                                There are few mandatory trainings like FOSTAC training that
                                employees have to undergo at frequent intervals. In Ecoil app
                                the vendor can upload such trainings and app can help in
                                tracking and comply with them.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-ll pb-3">
                        <div className="industries-img">
                            <img src={business} alt="" className="w-100" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>


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
                                    <div className="contact-info px-3 py-4" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.873), rgba(0, 0, 0, 0.91)), url(${img5})`, backgroundPosition: 'center', backgrounSize: 'cover' }} >
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
export default Service3;