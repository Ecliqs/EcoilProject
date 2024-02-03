import React from 'react'
import ServiceImg1 from "../Images/Icon/blackoil.png"
import ServiceImg2 from "../Images/Icon/greenoil.png"
import ServiceImg3 from "../Images/Icon/track.png"
import ServiceImgBg1 from "../Images/Serviceimg/s1.jpg"
import ServiceImgBg2 from "../Images/Serviceimg/Greenfuelsupply.jpg"
import ServiceImgBg3 from "../Images/Serviceimg/s2.jpg"

function OurServices() {
  return (
    <div>
        <section className="what-we-offer py-5 ">
                <div className="max-width">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="about-heading text-center py-5">
                                    <h4>OUR SERVICES</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 pb-3">
                                <div className="offer-img" style={{ backgroundImage: `url(${ServiceImgBg1})` }}></div>
                                <div className="offer-text d-flex shadow py-3 px-3 py-lg-5">
                                    <div className="offer-img-1" >
                                        <img src={ServiceImg1} style={{width: "80px"}} />
                                    </div>
                                    <div className="offer-text-2 px-3 px-lg-4 text-left">
                                        <h4>UCO collection</h4>
                                        <p style={{ "fontSize": "16px" }}>
                                            Ecoil gathers UCO from various food business operators and
                                            facilitates its conversion to Biodiesel.
                                        </p>
                                        <a href="/used-cooking-oil-collection" className="read">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 pb-3">
                                <div className="offer-img3" style={{ backgroundImage: `url(${ServiceImgBg2})` }}></div>
                                <div className="offer-text d-flex offer-text-3 shadow py-3 px-3 py-lg-5" >
                                    <div className="offer-img-1">
                                        <img src={ServiceImg2} style={{width: "80px"}} />
                                    </div>
                                    <div className="offer-text-2 px-4 text-left">
                                        <h4>Green Fuel Supply</h4>

                                        <p>
                                            Ecoil supplies biodiesel, a green fuel made from the
                                            recycling of used cooking oil.
                                        </p>
                                        <a href="/green-fuel-biodiesel-supply" className="read">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 pb-3">
                                <div className="offer-img2" style={{ backgroundImage: `url(${ServiceImgBg3})` }}></div>
                                <div className="offer-text d-flex shadow py-3 px-3 py-lg-5" style={{maxHeight: "300px"}}>
                                    <div className="offer-img-1">
                                        <img src={ServiceImg3}  style={{width: "80px"}} />
                                    </div>
                                    <div className="offer-text-2 px-4 text-left">
                                        <h4>Food Business Compliance Solution</h4>
                                        <p style={{ "fontSize": "16px" }}>
                                        Ecoil helps in tracking and adhering to food business compliances through its mobile app.
                                        </p>
                                        <a href="/food-business-compliance-solution" className="read">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default OurServices