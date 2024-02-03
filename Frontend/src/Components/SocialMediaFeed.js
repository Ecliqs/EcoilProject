import React from 'react'
import Slider from "react-slick";
// import {InstagramEmbed} from 'react-instagram-embed';
import Simg1 from "../Images/Serviceimg/12.jpg"
import Simg2 from "../Images/Serviceimg/Greenfuelsupply.jpg"
import Simg3 from "../Images/Serviceimg/Usedcookingoil.jpg"
import ServiceImg3 from "../Images/Icon/track.png"
import { InstagramEmbed } from 'react-social-media-embed';
import SocialMediaSliderItem from './SocialMediaSliderItem';
import { Link } from 'react-router-dom';

function SocialMediaFeed() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="heading text-center mb-5">
                            <h4> Social Media Feed </h4>
                        </div>
                        {/* <Slider {...settings}>
                            <div className="slider-item p-2">
                                <SocialMediaSliderItem linkUrl={"https://www.instagram.com/p/Cqf4eYgBBuD"}/>
                            </div>  
                            <div className="slider-item p-2">
                                <SocialMediaSliderItem linkUrl={"https://www.instagram.com/p/Cp5Oaw8hyUe"}/>
                            </div> 
                            <div className="slider-item p-2">
                                <SocialMediaSliderItem linkUrl={"https://www.instagram.com/p/Cj7hrbvrGc2"}/>
                            </div>                                                  
                           

                        </Slider> */}
                        <div style={{maxHeight: "580px", overflowY: "scroll"}}>
                        <div className='sk-ww-linkedin-page-post' data-embed-id='251635'></div>
                        </div>
                        <div>
                            <div className="mt-5">
                                 <Link to={`https://www.linkedin.com/company/ecoil-energy/` } target="_blank" className='btn btn-sumbits'>READ MORE
                                        
                                    </Link>
                            </div>
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaFeed