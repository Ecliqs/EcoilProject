import React from "react";
import aboutthree from '../Images/aboutthree.jpg'
import greenbg from '../Images/bgcreate.jpg'
import ucoOverview from "../Images/UCO-Overview.jpg"
import greenFuelOverview from "../Images/Green-fuel-supply-overview.jpg"
import FBCOverview from "../Images/FBC-Overview.jpg"


function Overview({ page = "service1" }) {
    return (
        <div>
            <section className="industries-we-serve industries-serve py-lg-5 py-3" style={{ background: `url(${greenbg})`, backgroundPosition: 'center', backgrounSize: 'cover' }}>
                <div className="max-width">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 col-ll pb-3">
                                <div className="industries-img">
                                    {page == "service1" ?
                                        <img src={ucoOverview} alt="" className="w-100" />
                                        :
                                        <>
                                            {page == "service2" ?
                                                <img src={greenFuelOverview} alt="" className="w-100" />
                                                :
                                                <>
                                                    {page == "service3" ?
                                                        <img src={FBCOverview} alt="" className="w-100" />
                                                        :
                                                        <img src={aboutthree} alt="" className="w-100" />
                                                    }
                                                </>
                                            }
                                        </>
                                    }



                                </div>
                            </div>
                            <div className="col-lg-6 pb-3">
                                <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                                    <div className="service-heading mb-3 text-justify">
                                        {/* <span>INDUSTRIES</span> */}
                                        <h4 className="text-center">Overview</h4>

                                        {page == "service1" &&

                                            <>
                                                <p>
                                                    Ecoil gathers UCO from various food business operators and
                                                    facilitates its conversion to Biodiesel. The consumption of
                                                    Used Cooking Oil (UCO) poses adverse health effects. During
                                                    frying, several properties of oil are altered, and Total Polar
                                                    Compounds (TPC) are formed on repeated frying. The toxicity of
                                                    these compounds may cause several diseases such as
                                                    hypertension, atherosclerosis, Alzheimer's disease, liver
                                                    diseases.
                                                </p>
                                                <p>
                                                    Ecoil provides the best price in industry for the purchase of
                                                    UCO which encourages the restaurant and canteen owners to sell
                                                    UCO and move towards greener environment.
                                                </p>
                                            </>

                                        }

                                        {page == "service2" &&

                                            <>
                                                <p>
                                                    Biodiesel is a renewable, biodegradable fuel manufactured domestically from vegetable oils, animal fats, or recycled restaurant grease. Biodiesel meets both the biomass-based diesel and overall advanced biofuel requirement of the Renewable Fuel Standard.
                                                </p>

                                                <p>
                                                    Biodiesel is not only sustainable, it's a more environmentally-friendly, cleaner-burning option that can be used in diesel engines without modification. In fact, biodiesel decreases greenhouse gas emissions by up to 86%
                                                </p>

                                                <p>
                                                    Ecoil supplies biodiesel, a green fuel made from recycling of used cooking oil. Connect with us to know more.
                                                </p>

                                            </>

                                        }



                                        {page == "service3" &&

                                            <>
                                                <p className="text-center">
                                                    <h5>
                                                        Food Business Compliance Solution
                                                    </h5>
                                                </p>

                                                <p>
                                                    A variety of permissions are necessary to start and operate a food company. Recognizing the need to control food product manufacturing, storage, distribution, sale, and import, the Government of India enacted the Food Safety and Standards Act (FSSA) in 2006. This national regulatory organization ensures that food regulations are in accordance with international norms. There are many certificates, licenses, employee trainings, medical testing etc that food business operators need to comply on a regular basis. Ecoil helps in tracking and adhering to food business complainces through its mobile app.
                                                </p>
                                            </>

                                        }


                                    </div>
                                    {/* <div class="service-body service-body1 pb-3 d-flex mb-4">
                                        <div class="s-icon">
                                            <img src="img/10.png" />
                                        </div>
                                        <div class="service-text px-lg-4 px-3">
                                            <h4>Grocery Stores</h4>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna.
                                            </p>
                                        </div>
                                        </div>
                                        <div class="service-body service-body2 pb-3 mb-4 d-flex">
                                        <div class="s-icon s-icon2">
                                            <img src="img/11.png" />
                                        </div>
                                        <div class="service-text px-lg-4 px-3">
                                            <h4>Hotel &amp; Restaurant</h4>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna.
                                            </p>
                                        </div>
                                        </div>
                                        <div class="service-body service-body3 mb-4 d-flex">
                                        <div class="s-icon">
                                            <img src="img/12.png" />
                                        </div>
                                        <div class="service-text px-4">
                                            <h4>Medical &amp; Hospital</h4>
                                            <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore
                                            magna.
                                            </p>
                                        </div>
                                        </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Overview;