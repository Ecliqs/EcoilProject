import React, { useState } from "react";
import Navbar  from "../../Components/Navbar"
import Footer from "../../Components/Footer"
// import video from "../../Video/Video.webm"
import video from "../../Video/banner-video.mp4"
import version from "../../Images/Process_image.jpg"
import greenbg from '../../Images/bgcreate.jpg'
import { Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useEffect } from "react";
import SEO from "../../SEO";
import { Helmet } from "react-helmet";
import { createElement } from "react";


function Process(){

    // set title 
    // document.title = "Ecoil | Traceability of Oil"

    const isAuthenticated = useIsAuthenticated()
    const [videoHeight, setVideoHeight] = useState(0)

    useEffect(() => {
       document.getElementById("background-video").playbackRate = 0.5
       var video = document.getElementById("background-video")
    var height = video.offsetHeight;
    setVideoHeight(height)
    console.log("height", height)

    // get the window width

    var w = window.innerWidth;

    // check if the window is mobile

    if (w < 768) {
        setVideoHeight(height+10)
    }

    }, [])
    

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Traceability of Oil").then(res => setTags(res))
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

                <div className="Video-banner" >
                    <video id="background-video" autoPlay loop muted onloadstart="this.playbackRate = 0.1">
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="contact-text-2" style={{height: `${videoHeight}px`}}>
                    <h1>Traceability of Oil</h1>
                    <p>
                    Ecoil provides complete traceability of oil from collection by our team to its conversion to biodiesel
                    </p>
                    </div>
                </div>

                <div className="container pt-5 pb-5">
                    <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="btn">
                        <button className="btn btn-service">
                            {isAuthenticated() ? 
                            <Link to="/dashboard">Track Your Oil</Link>
                            :
                            <Link to="/login">Track Your Oil</Link>
                            }
                            
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <section className="industries-we-serve industries-serve py-lg-5 py-3" style={{background:`url(${greenbg})`, backgroundPosition: 'center', backgrounSize: 'cover' }}>
                    <div className="max-width">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-ll pb-3">
                            <div className="industries-img">
                            <img src={version} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-3">
                            <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                            <div className="service-heading mb-3">
                                {/* <span>INDUSTRIES</span> */}
                                <h4>Process</h4>
                                <p className="text-justify">
                                Ecoil provides complete traceability of the oil sold to them
                                by restaurants. When any restaurant owner, canteen, cloud
                                kitchens puts request for oil collection from the Ecoil mobile
                                application or website, Ecoil collects the waste oil from them
                                and pays them handsomely. The collected oil in turn is
                                transporated to the warehouse. The oil is then moved to a
                                biodiesel plant where this oil is converted to biodiesel by a
                                process of transestrification. Post that green points for the
                                carbon footprints saved by restaurant are added to its account
                                which he can redeem anytime. . On Ecoil mobile app and website
                                you can get complete information of where the oil is post you
                                gave it to the Ecoil team and you can know when it is
                                converted to green fuel.
                                </p>
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

export default Process