import React, { useEffect, useState, createElement } from 'react'
import Navbar from '../../Components/Navbar'
// import banner1 from "../../Images/BioDiesel1.jpg"
import banner1 from "../../Video/home_video_banner_2.gif"

// import banner2 from "../../Images/01.jpg"
// import a1 from "../../Images/08.jpg"
// import a2 from "../../Images/05.jpg"
import t3 from "../../Images/t3.png"
import a3 from "../../Images/aboutone.jpg"
import a4 from "../../Images/aboutthree.jpg"
// import a4 from "../../Images/About1.jpg"
import a5 from "../../Images/About2.jpg"
import bgcreate from "../../Images/bgcreate.jpg"
import kitchen from "../../Images/cook-preparing-french-fries-kitchen.jpg"
import hotel from "../../Images/Icon/hotel.png"
import burger from "../../Images/Icon/burger.png"
import serve from "../../Images/Icon/serve.png"
import temple from "../../Images/Icon/temple.png"
import snacks from "../../Images/Icon/snacks.png"
import kitchenIcon from "../../Images/Icon/kitchen.png"

import Stat1 from "../../Images/Carbonemissionsaved.png"
import Stat2 from "../../Images/UCOconvertedtilldate.png"
import Stat3 from "../../Images/HappyFamilies.png"
import Stat4 from "../../Images/FoodBusinessserved.png"
// import RequestForOilCollection from '../../Components/RequestForOilCollection'
import NewsFeed from '../../Components/NewsFeed'
import Footer from '../../Components/Footer'
import Testimonials from '../../Components/Testimonials'
// import Slider from "react-slick";
// import Simg1 from "../../Images/Serviceimg/12.jpg"
// import Simg2 from "../../Images/Serviceimg/Greenfuelsupply.jpg"
// import Simg3 from "../../Images/Serviceimg/Usedcookingoil.jpg"
import SocialMediaFeed from '../../Components/SocialMediaFeed'
import { useIsAuthenticated } from 'react-auth-kit'
import { Link } from 'react-router-dom'
import OurServices from '../../Components/OurServices'

import ModalVideo from 'react-modal-video';
import "../../modal-video.scss"
import ReponsiveModal from '../../Components/ReponsiveModal'
// import RequestForOilCollection2 from '../../Components/RequestForOilCollection2'
// import version from "../../Images/4thversion.png"
import RFCSection from '../../Components/RFCSection'
import { Helmet } from 'react-helmet'
import SEO from '../../SEO'

function Home() {

    // set title 
    // document.title = "Ecoil | Home"

    const isAuthenticated = useIsAuthenticated()

    const [isVideoOpen, setIsVideoOpen] = useState(false)

    

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(() => {
        const href = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1
        );
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);


    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Home").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])
    
    



    return (
        <div>

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>

            <div className="sticky-icon">
                <a target="_blank" href="https://www.facebook.com/ecoilenergy?mibextid=ZbWKwL" className="Facebook"><i className="fab fa-facebook-f"> </i> Facebook
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/ecoil-energy/" className="Linkedin"><i className="fa-brands fa-linkedin"></i> Linkedin
                </a>
                <a target="_blank" href="https://wa.me/919352809044" className="Whatsapp"><i className="fab fa-whatsapp"></i> Whatsapp
                </a>
            </div>

            <ReponsiveModal />

            <Navbar />

            {/* Modal */}

            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: true }}
                isOpen={isVideoOpen}
                videoId="Ke4fEdahtDM"
                onClose={() => setIsVideoOpen(false)}

            />

            {/* Modal */}

            {/* Banner */}

            <div id="carouselExampleControls" className="carousel slide slides" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item item active">

                        {/* <img src={banner1} className="slider d-block w-100" alt="..." /> */}

                        <img src={banner1} className=" d-block w-100" alt="..." />

                        <div className="carousel-caption caption1  d-block">
                            <h1 aria-label="- Our UCO collection services are available at">
                                Our UCO collection services are available at&nbsp;<span className="Cityspan">60+ Cities</span>. We have saved
                                more than &nbsp;<span className="banner-texts typewriter"></span> &nbsp;
                                emissions.

                            </h1>

                            <div className="btn-and-vdo d-flex mt-3 justify-content-center">
                                {/* <div className="col-lg-6">
                                    <button className="btn btn-banner">How Ecoil Work</button>
                                </div> */}
                                {/* <div className="col-lg-12 d-lg-block b-md-none d-sm-none d-none">
                                    <a className="play-btn" onClick={() => setIsVideoOpen(true)} style={{margin: "0 auto"}} href="#"></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item item ">
                        <img src={banner1} className="slider d-block w-100" alt="..." />
                        <div className="carousel-caption caption1  d-block">
                            <h1 aria-label="- Our UCO collection services are available at">
                                Our UCO collection services are available at&nbsp;<span className="Cityspan">60+ Cities</span>. We have saved
                                more than &nbsp;<span className="banner-texts typewriter"></span> &nbsp;
                                emissions.

                            </h1>

                            <div className="btn-and-vdo d-flex mt-3">
                                {/* <div className="col-lg-6">
                                    <button className="btn btn-banner">How Ecoil Work</button>
                                </div> */}
                                {/* <div className="col-lg-12 d-lg-block b-md-none d-sm-none d-none">
                                    <a className="play-btn" href="#"></a>
                                </div> */}
                                {/* <div className="col-lg-12 d-lg-block b-md-none d-sm-none d-none">
                                    <a className="play-btn" onClick={() => setIsVideoOpen(true)} style={{margin: "0 auto"}} href="#"></a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="carousel-item item">
                        <img src={banner2} className="slider d-block w-100" alt="..." />
                        <div className="carousel-caption caption2 d-block">
                            <h1 aria-label="- Our UCO collection services are available at">
                                Our UCO collection services are available at&nbsp;<span className="Cityspan">60+Cities</span>. We have saved
                                more than &nbsp;<span className="banner-texts typewriter"></span>
                                emissions.

                            </h1>
                            <div className="btn-and-vdo d-flex mt-3">
                                <div className="col-lg-6">
                                    <button className="btn btn-banner">How Ecoil Work</button>
                                </div>
                                <div className="col-lg-6 d-lg-block b-md-none d-sm-none d-none">
                                    <a className="play-btn" href="#"></a>

                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            {/* Banner */}

            {/* which wastes we collect get Our service   */}
            <section className="we-help mb-5">
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-7 pb-3 col-11">
                                <div className="helps-inner shadow">
                                    <div className="row py-4 align-items-center justify-content-center">
                                        <div className="col-lg-6 padding-home-page">
                                            <div className="which-wasteds-we-collect help-inner-2 text-left">
                                                <h3 style={{ fontSize: "19px", marginBottom: "12px" }}>Steps to Follow After Frying Oil</h3>
                                                <p className="step-text">
                                                    You can sell your repeatedly fried oil to Ecoil in 4
                                                    easy steps. Follow them and relax while feeling good for
                                                    contributing towards the environment. Check out these
                                                    steps here!
                                                </p>

                                            </div>
                                        </div>

                                        <div className="col-lg-6 padding-home-page ">

                                            <div className="check d-flex text-left">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <p className="step-text mb-0 ">
                                                    <b>Cool the waste burnt oil and fill it in a container</b>
                                                </p>
                                            </div>
                                            <div className="check d-flex text-left">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <p className="step-text mb-0">
                                                    <b>Pack the container properly to avoid spillage</b>
                                                </p>
                                            </div>

                                            <div className="check d-flex text-left">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <p className="step-text mb-0">
                                                    <b>Place a Request for oil Collection on Mobile App/ Call
                                                        Us on Toll Free Number</b>
                                                </p>
                                            </div>
                                            <div className="check d-flex text-left">
                                                <i className="fa fa-check" aria-hidden="true"></i>
                                                <p className="step-text mb-0">
                                                    <b>Feel Good For Your Unconditional Support to Enviorment</b>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 pb-3 col-11">
                                <div className="get-our-service contact-help shadow py-4 px-5">
                                    <h4 className="mb-4">Get Our Service Now !</h4>
                                    <p className="step-text text-justify">
                                        We provide best-in-class services for Food Business Operators to keep their customers healthy while also safeguarding the environment. Check them out!
                                    </p>
                                    <div className="call-icons d-flex text-center">

                                        <div className="call-text " style={{ width: "100%" }}>
                                            <Link to="/services">View All Service</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* end */}

            {/* about section */}

            <section className="about-us py-lg-5 py-3 ">
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-6 col-11 pb-3 d-lg-none d-md-block d-block d-none">
                                <div className="about-ecoil about-right-img">
                                    <div className="background-div"></div>
                                    <img src={a4} className="about-right-img1" />
                                    <img src={a5} className="about-right-img2" />

                                    <div className="about-experience d-flex">
                                        <div className="about-img">
                                            <img src={t3} />
                                        </div>
                                        <div className="about-tesst">
                                            <h4 className="mt-3 mb-0">3M kg</h4>
                                            <p>UCO Converted Till Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-11 pb-3 pb-3">
                                <div className="about-heading">

                                    <h4>About Ecoil</h4>
                                    <p className="text-justify">
                                        ECOIL is a game-changing startup that is at the forefront of
                                        creating a greener future. This firm, founded by two
                                        like-minded individuals, has witnessed the rise of
                                        eco-friendly gasoline. The company's business approach
                                        revolves around the concept of ""Key to Nature Protection.""
                                        The team is trying to develop sustainable and scalable
                                        waste-to-energy business concepts. ECOIL collects and pays the
                                        highest price for burnt cooking oil and fats from eateries.
                                        The oil is then converted into biodiesel. The firm offers a
                                        variety of services to assist manufacturers in managing their
                                        waste oils and fats. ECOIL attempts to prevent any possible
                                        waste concerns by offering tailor-made packages to Food
                                        Industries and Fast Food Outlets. Ecoil is the perfect company
                                        for selling UCO because of the following reasons.
                                    </p>
                                </div>
                                <div className="about-body mb-4">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <img src={a3} />
                                        </div>
                                        <div className="col-lg-6 mt-3 px-lg-0 px-3 text-left">
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3"><b>Meets Regulatory Compliance</b></p>
                                            </div>
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3"><b>Ease of Collection and Tracking</b></p>
                                            </div>
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3">
                                                    <b>Mobile App based Scheduling and Traceability</b>
                                                </p>
                                            </div>
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3"><b>Instant Collection Certificate</b></p>
                                            </div>
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3"><b>Vendor First Approach</b></p>
                                            </div>
                                            <div className="about-service d-flex">
                                                <i className="fa fa-check mt-2" aria-hidden="true"></i>
                                                <p className="px-3"><b>Best Pricing</b></p>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-left">
                                                <Link to="/about-us">
                                                    <button className="btn btn-about" style={{ marginLeft: "20px" }}>Know More</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="body-after d-lg-flex d-md-inline-block d-sm-inline-block d-inline-block">
                                    <div className="about-btn py-4 text-center d-none d-md-none d-">
                                        <button className="btn btn-about">More About Us</button>
                                    </div>

                                    <div className="about-btn py-4 text-center d-lg-none d-md-block d-block">
                                        <button className="btn btn-about">More About Us</button>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col-lg-6 pb-3 d-lg-block d-md-none d-sm-none d-none">
                                <div className="about-right-img">
                                    <div className="background-div"></div>
                                    <img src={a4} className="about-right-img1" />
                                    <img src={a5} className="about-right-img2" />

                                    <div className="about-experience d-flex align-items-center">
                                        <div className="about-img">
                                            <img src={t3} />
                                        </div>
                                        <div className="about-tesst">
                                            <h4 className="mt-3 mb-0">3M kg</h4>
                                            <p>UCO Converted Till Date</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* end about section */}

            {/* industries-we-serve  */}

            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <section className="industries-we-serve industries-serve py-lg-5 py-3" style={{ "backgroundImage": `url(${bgcreate})` }}>
                    <div className="max-width">
                        <div className="container">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-lg-6 col-ll pb-3">
                                    <div className="industries-img">
                                        <img src={kitchen} className="w-100" />
                                    </div>
                                </div>
                                <div className="col-lg-6 pb-3">
                                    <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                                        <div className="service-heading mb-5">

                                            <h4>Industries We Serve</h4>
                                            <p className="text-justify mt-4">
                                                Used Cooking Oil increases free radicals, which promote
                                                inflammation, the root cause of most ailments like
                                                obesity, heart disease, and diabetes. Inflammation lowers
                                                immunity and increases infection risk. Ecoil purchased
                                                this harmful oil from food business operators and
                                                facilitates its conversion to biodiesel. Here are the
                                                industries we serve.
                                            </p>
                                        </div>
                                        <div className="service-body service-body1 pb-3 d-flex align-items-center ">
                                            <div className="s-icon1">
                                                <img src={hotel} />
                                            </div>
                                            <div className="service-text px-lg-4 px-3 text-left">
                                                <h4>Hotels and Restaurants</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                        <div className="service-body service-body2 pb-3 d-flex align-items-center">
                                            <div className="s-icon1 s-icon2">
                                                <img src={burger} />
                                            </div>
                                            <div className="service-text px-lg-4 px-3 text-left">
                                                <h4>Food Industries</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                        <div className="service-body service-body3 pb-3 d-flex align-items-center">
                                            <div className="s-icon1">
                                                <img src={serve} />
                                            </div>
                                            <div className="service-text px-4 text-left">
                                                <h4>Caterers and canteens</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                        <div className="service-body service-body3 pb-3 d-flex align-items-center">
                                            <div className="s-icon1 s-icon2">
                                                <img src={temple} />
                                            </div>
                                            <div className="service-text px-4 text-left text-left">
                                                <h4>Cloud Kitchens and religious places</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                        <div className="service-body service-body3 pb-3 d-flex align-items-center">
                                            <div className="s-icon1">
                                                <img src={snacks} />
                                            </div>
                                            <div className="service-text px-4 text-left">
                                                <h4>Snack Companies</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                        <div className="service-body service-body3 pb-3 d-flex align-items-center">
                                            <div className="s-icon1 s-icon2">
                                                <img src={kitchenIcon} />
                                            </div>
                                            <div className="service-text px-4 text-left">
                                                <h4>Commercial Kitchen</h4>
                                                {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna.
                          </p> --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* end */}

            {/* Our Services */}
            <OurServices />
            {/* Our Sevices */}

            {/* stats */}
            <section className="Counting py-5">
                <div className="max-width">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 state1 col-6">
                                <div className="state1 counting-inner">
                                    <div className="counting-img text-center">
                                        <img src={Stat1} />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">6.9 M kg</h5>
                                        <p>Carbon emission saved</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="state2 counting-inner">
                                    <div className="counting-img text-center">
                                        <img src={Stat2} />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">3 M kg</h5>
                                        <p>UCO converted till date</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="state3 counting-inner">
                                    {/* <div className="counting-img text-center counting-img-2 img-count"> */}

                                    <div className="counting-img text-center">
                                        <img src={Stat3}  />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">3 Cr</h5>
                                        <p>Happy Families</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className="state3 counting-inner inner-2">
                                {/* <div className="counting-img text-center counting-img-2 img-count"> */}

                                    <div className="counting-img text-center">
                                        <img src={Stat4}  />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">8500</h5>
                                        <p>Food Business served</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-6">
                                <div className="state3 counting-inner inner-2">
                                    <div className="counting-img text-center">
                                        <img src={Stat4} className='counts' />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">8500</h5>
                                        <p>Food Business served</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* stats */}

            {/* Request for Oil Collection */}
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

                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{textAlign: "center"}}>
                                <Link to="/login" className='btn btn-service'>Login</Link>
                            </div>
                        </div>
                    </div>
                </div>
            } */}

            <div id="requestforoilcollection" style={{ paddingTop: "52px" }}>
                {/* <RequestForOilCollection /> */}

                <RFCSection />

            </div>

            {/* Request for oil collection */}

            {/* News Feed */}

            <NewsFeed />

            {/* News Feed */}

            {/* Social Media Feeds */}
<div className="container xs:px-4">
    <SocialMediaFeed />
</div>
            

            {/* Social Media Feeds */}

            <Testimonials />




            {/* Footer */}

            <Footer />



            {/* Footert */}

        </div>
    )
}

export default Home