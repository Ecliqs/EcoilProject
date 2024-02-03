import React from 'react'

import aboutrightimg1 from '../../Images/08.jpg'
import aboutrightimg2 from '../../Images/05.jpg'
import t3 from '../../Images/t3.png'
import aboutone from '../../Images/aboutone.jpg'
// import img07 from '../../Images/07.jpg'
import aboutthree from '../../Images/aboutthree.jpg'
// import abouttwo from '../../Images/abouttwo.jpg'
import abouttwo from "../../Images/About2.jpg"
import img24 from '../../Images/24.png'
import img50 from '../../Images/50.png'
import a1 from '../../Images/a1.jpg'
import a2 from '../../Images/a2.jpg'
import Testimonials from '../../Images/Testimonials.jpg'
import imgaward from '../../Images/award.jpg'
import imgaward1 from '../../Images/awards/award.png'
import collective from '../../Images/awards/impact-collective.jpg'
import oasis from '../../Images/awards/startup-oasis.png'
import banasthali from '../../Images/awards/aic-banasthali.jpg'
import pic from '../../Images/awards/pic.jpg'
import pusaiari from '../../Images/awards/pusa-iari.png'
import shell from '../../Images/awards/shell.png'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import Counting from '../../Components/Counting'
// import fImage from "../../Images/f-min.jpg"
import fImage from "../../Images/About-us-banner.jpg"
import CF1 from "../../Images/co_founder3.png"
import CF2 from "../../Images/co_founder2.png"
import Team from "../../Images/team2.jpg"
import greenbg from '../../Images/bgcreate.jpg'
import SEO from '../../SEO'
import { useState } from 'react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { createElement } from 'react'



function AboutUs() {

  // set title 
  // document.title = "Ecoil | About Us"

  const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("About Us").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

  return (
    <>
            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>
{/* linear-gradient(to right, rgb(8 0 0 / 78%), rgb(0 0 0 / 84%) */}
      <Navbar />
      <div className="contact-bnner" style={{ backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${fImage})` }}>
        <div className="max-width">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-8">
                <div className="contact-text">
                  <h1>About Us</h1>
                  <p>
                    We create the BEST OUT OF WASTE! Ecoil converts usedcooking oil
                    (UCO) into a green, sustainable biodiesel, keeping people healthy
                    and the environment safe!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- about section --> */}

      <section className="about-us-main py-lg-5 py-3">
        <div className="max-width">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6 col-11 pb-3 d-lg-none d-md-block d-block d-none">
                <div className="about-ecoil about-right-img">
                  <div className="background-div"></div>
                  <img src={aboutthree} className="about-right-img1" />
                  <img src={abouttwo} className="about-right-img2" />

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
                  {/* <!-- <span>ABOUT US</span> --> */}
                  <h4>About Ecoil</h4>
                  <p className='text-justify'>
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
                      <img src={aboutone} />
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

                    <div className="col-md-12 mt-2">
                      <div className="text-justify">
                        Ecoil mobile application provides traceability of oil where oil donors can track their sold oil. Once the oil is secured from restaurant owners, canteens,etc, it is  transported to a secured warehouse, and then  moved into a biodiesel plant where the oil gets converted into biodiesel by the process of transesterification. Green Points are generated and added into the accounts of respective restaurant owners and canteen owners where they can redeem them anytime.
                      </div>
                    </div>

                  </div>
                </div>
                <div className="body-after d-lg-flex d-md-inline-block d-sm-inline-block d-inline-block">
                  <div className="about-btn py-4 text-center d-none d-md-none d-">
                    <button className="btn btn-about">More About Us</button>
                  </div>
                  {/* <!-- <div
                        className="ceo_name px-4 pt-4 d-lg-flex d-md-inline-block d-sm-inline-block d-inline-block"
                      >
                        <div className="img px-4">
                          <img src={img07} className="text-center" />
                        </div>
                        <div className="title">
                          <h4 className="mb-0">Joe Hodgson</h4>
                          <p>CEO Wastco</p>
                        </div>
                      </div> --> */}
                  {/* <div className="about-btn py-4 text-center d-lg-none d-md-block d-block">
                    <button className="btn btn-about">More About Us</button>
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6 pb-3 d-lg-block d-md-none d-sm-none d-none">
                <div className="about-right-img">
                  <div className="background-div"></div>
                  <img src={aboutthree} className="about-right-img1" />
                  <img src={abouttwo} className="about-right-img2" />

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

      {/* <!-- end about section --> */}

      <section className="who-we-are py-lg-5 py-3">
        <div className="max-width">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 pb-5 text-center">
                <div className="heading2">
                  {/* <!-- <span> WHO WE ARE</span> --> */}
                  <h4>We Provide Best Service For Your Home & Business</h4>
                  {/* <!-- <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi
                    </p> --> */}
                </div>
              </div>
              <div className="col-lg-12 pb-5">
                <div className="our-mission px-4 py-4">
                  <div className="mission-icon pb-3">
                    <img src={img24} />
                  </div>
                  <div className="our-mission-text">
                    <h4>Our Mission</h4>
                    <p>
                      Our mission is to provide a reliable and efficient service
                      for the collection of used cooking oil from households and
                      businesses, and facilitate its conversion into biofuel. We
                      aim to promote awareness about the harmful effects of
                      improper disposal of cooking oil and encourage responsible
                      environmental practices. Through our efforts, we strive to
                      contribute towards a greener and cleaner future for
                      generations to come.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 pb-5">
                <div className="our-mission missions px-4 py-4">
                  <div className="mission1-icon pb-3">
                    <img src={img50} />
                  </div>
                  <div className="our-mission-text">
                    <h4>Our Vision</h4>
                    <p >
                      Our vision is to become the global leader in
                      waste-to-green-energy solutions, empowering communities to
                      create a sustainable and healthier environment for future
                      generations. We are committed to providing innovative and
                      reliable solutions that not only reduce waste but also
                      generate clean energy, while creating employment
                      opportunities and promoting the well-being of our employees.
                      A leading platform for waste-to-green-energy solutions,
                      creating a healthier and cleaner environment for future
                      generations.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- <div className="col-lg-4">
                              <div className="skill-bar-title d-flex">
                                  <h5>Garbage Pickup</h5>
                                  <span>90 %</span>
                              </div>
                              <div className="skill-bar">
                                  <div className="skill-bar2"></div>
                              </div>
                              <div className="skill-bar-title">
                                  <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                  </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="skill-bar-title d-flex">
                                  <h5>Residential Recycling</h5>
                                  <span>90 %</span>
                              </div>
                              <div className="skill-bar">
                                  <div className="skill-bar3"></div>
                              </div>
                              <div className="skill-bar-title">
                              <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="skill-bar-title d-flex">
                                  <h5>Industry Pickup</h5>
                                  <span>90 %</span>
                              </div>
                              <div className="skill-bar">
                                  <div className="skill-bar4"></div>
                              </div>
                              <div className="skill-bar-title">
                                  <p>Lorem ipsum dolor sit amet consectetur adipi scing elit sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                  </div>
                          </div> --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="provide py-lg-5 py-3 ">
        <div className="max-width">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-10">
                <div className="recycle-icon text-center">
                  <h4 className="mt-3">Why should UCO be disposed to Ecoil?</h4>
                  <p className="px-5" style={{ textAlign: 'justify' }} >
                    The consumption of Used Cooking Oil (UCO) poses adverse health
                    effects. During frying, several properties of oil are altered,
                    and Total Polar Compounds (TPC) are formed on repeated frying.
                    The toxicity of these compounds may cause several diseases
                    such as hypertension, atherosclerosis, Alzheimer's disease,
                    liver diseases, and so on. Ecoil not only purchases used
                    cooking paying a handsome cost to the supplier but also
                    facilitates its conversion to Biodiesel. We focus on creating
                    a green fuel and eliminate the use of UCOs by the street
                    vendors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counting />

      <section className="our-team py-lg-5 py-3">
        <div className="max-width">
          <div className="container">
            <div className="row justify-content-center align-items-start">
              <div className="col-lg-10">
                {/* <div className="heading text-center py-4">
                    <span>OUR TEAM</span>
                    <h4>Meet Our Team</h4>
                    <p className="px-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p>
                  </div> */}
              </div>
              <div className="col-lg-6 col-11 pb-3">
                <div className="containerr">
                  <div style={{ height: "400px", width: "100%", 
                  backgroundImage: `url(${CF1})`,
                  backgroundSize: "auto",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "0px 0px 10px 0px #000",
                  borderRadius: "10px",
                   }}>

                  </div>
                  {/* <img src={CF1} alt="Avatar" className="image" style={{ boxShadow: "0px 0px 10px 0px #000" }} /> */}
                  {/* <div className="overlay">
                      <div className="social-icon icon2">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </div> */}
                </div>
                <div className="wokers-name">
                  <h4 className="mb-2">Sushil Vaishnav</h4>
                  <p>
                    Meet Sushil Vaishnav, a highly accomplished professional with a diverse skill set in the areas of , supply chain management, and business development. Holding a B.Tech in Dairy Technology and an MBA from Symbiosis, Sushil has amassed over 16 years of experience in various domains including international procurement, supply chain optimization, demand planning, green field projects for the cold chain, and business development.

                  </p>
                  <p>
                    Currently, Sushil is the founder and CEO of a  startup KNP Arises Green Energy Pvt LTD that focuses on sustainable green fuel raw materials and green energy. This innovative approach not only promotes environmental sustainability but also contributes to reducing waste and the carbon footprint.
                  </p>

                  <p>
                    Recognized for his exceptional work, Sushil's startup has been honored by prestigious organizations. Sushil's notable achievements have also earned him the esteemed Hindustan Mint Startup Icon Award, solidifying his position as a pioneering entrepreneur.

                  </p>
                  <p className="Co-founder-degisnation">Co Founder</p>
                </div>
              </div>
              <div className="col-lg-6 col-11 pb-3">
                <div className="containerr">
                <div style={{ height: "400px", width: "100%", 
                  backgroundImage: `url(${CF2})`,
                  backgroundSize: "auto",
                  backgroundPosition: "top",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "0px 0px 10px 0px #000",
                  borderRadius: "10px",
                   }}>

                  </div>
                  {/* <img src={CF2} alt="Avatar" className="image" style={{ boxShadow: "0px 0px 10px 0px #000" }} /> */}
                  {/* <div className="overlay">
                      <div className="social-icon icon2">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin"></i>
                      </div>
                    </div> */}
                </div>
                <div className="wokers-name">
                  <h4 className="mb-2"> Kirti Vaishnav </h4>
                  <p>
                    Introducing Kirti Vaishnav, our distinguished technology leader here at Ecoil!
                    With a robust background in handling cutting-edge technology platforms for oil collection and pioneering data-enabled models for future predictions, Kirti is at the forefront of innovation in the energy sector.

                  </p>
                  <p>
                    Having previously spearheaded groundbreaking implementations of blockchain, smart contracts, Hyperledger, and Ethereum technologies in Banking, Insurance, Supply Chain, and Real Estate domains, Kirti brings a wealth of experience to Ecoil team. She also has many awards under her belt including Level Up Program and Mint Startup Icon Award

                  </p>
                  <p className="Co-founder-degisnation">Co Founder</p>
                </div>
              </div>

              {/* <div className="col-lg-6">
                <div className="wokers-name">
                    <h4 className="mb-2">Sushil Vaishnav</h4>
                    <p>
                    Meet Sushil Vaishnav, a highly accomplished professional with a diverse skill set in the areas of , supply chain management, and business development. Holding a B.Tech in Dairy Technology and an MBA from Symbiosis, Sushil has amassed over 16 years of experience in various domains including international procurement, supply chain optimization, demand planning, green field projects for the cold chain, and business development.

                    </p>
                    <p>
                    Currently, Sushil is the founder and CEO of a  startup KNP Arises Green Energy Pvt LTD that focuses on sustainable green fuel raw materials and green energy. This innovative approach not only promotes environmental sustainability but also contributes to reducing waste and the carbon footprint.
                    </p>

                    <p>
                    Recognized for his exceptional work, Sushil's startup has been honored by prestigious organizations. Sushil's notable achievements have also earned him the esteemed Hindustan Mint Startup Icon Award, solidifying his position as a pioneering entrepreneur.

                    </p>
                    <p className="Co-founder-degisnation">Co Founder</p>
                  </div>
                </div> */}




            </div>
          </div>
        </div>
      </section>

      {/* <!-- Collage image Start --> */}


      <section className="collage-image">
        <div className="max-width">
          <div className="container">
            <div className="row">

              <div className="col-lg-12">
                <div className="heading text-center py-4">
                  {/* <span>OUR TEAM</span> */}
                  <h4>Meet Our Exceptional Team</h4>
                  {/* <p className="px-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </p> */}
                </div>
              </div>

              <div className="col-lg-12">
                {/* <img src={Team} alt="Avatar" className="image" /> */}
                <div className='col-lg-12'>
                    <div className='team-image' style={{backgroundImage: `url(${Team})`,}}>

                    </div>
                </div>
                <div className="Collage-image-text">
                  {/* <h4 className="mb-2">The Team</h4> */}
                  <div className="text-left">
                    <p>
                      At Ecoil (KNP Arises Green Energy Pvt Ltd), we believe that our achievements are a direct reflection of the talented and dedicated professionals who make up our team. With a combined expertise spanning several decades, our team is uniquely positioned to bring unparalleled value to our clients and partners. Here's a brief introduction to the pillars of our organization:

                    </p>
                    <p>

                      <strong>Sales and Marketing: </strong> Spearheaded by a leader with a rich history of over 22 years in the domain, our sales and marketing department is adept at tapping into market trends, understanding consumer needs, and delivering value. Their strategic insights have been instrumental in carving our niche in the industry.

                    </p>

                    <p>

                      <b> Operations:</b> Our Operations head, with over 16 years of experience in Supply Chain and Logistics, ensures that the backbone of our company runs seamlessly. This expertise guarantees efficiency, timeliness, and precision in every task we undertake.

                    </p>

                    <p>

                      <b>Digital:</b> Living in the digital age requires an adept team to navigate the complex world of online platforms and technologies. Our Digital team, with over 10 years of experience, is at the forefront of digital innovations, ensuring our presence is both impactful and relevant.

                    </p>

                    <p>
                      <b>Finance:</b> Financial prudence is at the core of our success. Led by a team with over 15 years of experience, our finance department meticulously oversees our economic endeavors, ensuring sustainable growth and fiscal responsibility.

                    </p>

                    <p>
                      <b>Customer Service:</b> Renowned for their excellence, our customer service team, with over 10 years of experience, stands as the beacon of our commitment to client satisfaction. They go above and beyond, ensuring every interaction is meaningful and productive.

                    </p>

                    <p>
                      <b>Human Resources:</b> At the helm of our organizational well-being is our HR head, boasting over 12 years of experience. Their insights and strategies have been vital in creating an environment where talent thrives and innovation is a constant.

                    </p>

                    <p>
                      Joining hands with [Your Company Name] means collaborating with a team that is driven by passion, guided by experience, and committed to excellence. We invite you to be a part of our journey towards continued success.

                    </p>
                  </div>
                  {/* <p className="Co-founder-degisnation">Co Founder</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Collage image End --> */}

      {/* <!-- Awards and Recognitions/Accolades --> */}
      <div className="awards">
        <div className="max-width">
          <div className="container">
            <div className="row align-items-center">
              <h2 className="text-center awards-h2">
                Awards and Recognitions/Accolades
              </h2>
              {/* <div className="col-lg-6">
                <img src={imgaward} alt="" className="w-100" />
              </div> */}
              <div className="col-lg-12">
                <div className="row">

                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      <div className="about-box-1">
                        <div>
                          <img className="about-box-img" src={imgaward1} style={{ height: 90 }} />
                        </div>

                        <div>
                          <h3 className="award-heading"> Mint Startup Icon Award </h3>
                          <h3 className="award-year"> 2023 </h3>
                        </div>

                      </div>

                    </div>
                  </div>

                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      <div className="about-box-1">
                        <div>
                          <img className="about-box-img" src={imgaward1} style={{ height: 90 }} />
                        </div>

                        <div>
                          <h3 className="award-heading"> Swachta Startup Challenge Award </h3>
                          <h3 className="award-year"> 2022 </h3>
                        </div>

                      </div>

                    </div>
                  </div>



                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      {/* <!-- <span className="about-text-span">01</span> --> */}
                      <div>
                        <img className="about-box-img" src={collective} />
                      </div>
                      <div>
                        <h3 className="award-heading"> Impact Collective </h3>
                        <h3 className="award-year"> 2021 </h3>
                      </div>

                      {/* <!-- <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Obcaecati dolor, nihil sunt fugit adipisci porro. Delectus
                            numquam, iure ipsum unde commodi quae ut?
                          </p> --> */}
                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      {/* <!-- <span className="about-text-span">02</span> --> */}
                      <div>
                        <img className="about-box-img" src={oasis} />
                      </div>

                      <div>
                        <h3 className="award-heading">Startups OASIS</h3>
                        <h3 className="award-year"> 2021 </h3>
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">

                      <div>
                        <img className="about-box-img" src={banasthali} />
                      </div>

                      <div>
                        <h3 className="award-heading">AIC Banasthali </h3>
                        <h3 className="award-year"> 2020 </h3>
                      </div>


                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      <div>
                        <img className="about-box-img" src={pic} />
                      </div>

                      <div>
                        <h3 className="award-heading">PIC</h3>
                        <h3 className="award-year"> 2019 </h3>
                      </div>



                    </div>
                  </div>
                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      <div>
                        <img className="about-box-img" src={pusaiari} />
                      </div>

                      <div>
                        <h3 className="award-heading"> PUSA-IARI </h3>
                        <h3 className="award-year"> 2019 </h3>
                      </div>

                    </div>
                  </div>
                  {/* <!-- <div className="col-lg-6 text-center">
                      <div className="about-box-1">
                        <span className="about-text-span">06</span>
                        <h3 className="award-heading">KNP Arises started in 2018</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Obcaecati dolor, nihil sunt fugit adipisci porro. Delectus
                          numquam, iure ipsum unde commodi quae ut?
                        </p>
                      </div>
                    </div> --> */}
                  <div className="col-lg-3 text-center">
                    <div className="about-box-1">
                      <div className="about-box-1">
                        <div>
                          <img className="about-box-img" src={shell} />
                        </div>

                        <div>
                          <h3 className="award-heading"> SHELL E4 </h3>
                          <h3 className="award-year"> 2019 </h3>
                        </div>

                      </div>


                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Awards and Recognitions/Accolades --> */}

      <Footer />

    </>
  )
}

export default AboutUs