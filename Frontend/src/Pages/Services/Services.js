import React from "react";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Testimonials from "../../Components/Testimonials"
import ServiceImg1 from "../../Images/Icon/blackoil.png"
import ServiceImg2 from "../../Images/Icon/greenoil.png"
import ServiceImg3 from "../../Images/Icon/track.png"
import ServiceImgBg1 from "../../Images/Serviceimg/s1.jpg"
import ServiceImgBg2 from "../../Images/Serviceimg/Greenfuelsupply.jpg"
import ServiceImgBg3 from "../../Images/Serviceimg/s2.jpg"
import Office from "../../Images/Icon/office.png"
import Email from "../../Images/Icon/email.png"
import Call from "../../Images/Icon/call.png"
// import img5 from "../../Images/05.jpg"
import a1 from "../../Images/a1.jpg"
import Banner from "../../Images/service-banner.jpg"
import OurServices from "../../Components/OurServices";
import Appointment from "../../Components/Appointment";
import img5 from "../../Images/Contact-us.jpg"
import { Helmet } from "react-helmet";
import SEO from "../../SEO";
import { useState } from "react";
import { useEffect } from "react";
import { createElement } from "react";

function Services() {

    // set title 
    // document.title = "Ecoil | Services"

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Services").then(res => setTags(res))
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

            <div className="service-bnner" style={{ backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${Banner})`, backgroundPosition: "bottom" }}>
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8">
                                <div className="contact-text">
                                    <h1>Our Services</h1>
                                    <p>
                                        Ecoil collects used cooking oil (UCO) from restaurants, canteens,
                                        cloud kitchens, and religious places and helps in the facilitation
                                        of green fuel, Biodiesel, creating a green future for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Services */}
            <OurServices />
            {/* Our Sevices */}

            <hr className="my-lg-5 my-0" />

            <section id="appointment" className="contact-section py-5">
                <div className="max-width text-left">
                    <div className="contain shadow px-lg-5 py-lg-5 px-2 py-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 pb-3 d-lg-block d-md-none d-sm-none d-none">
                                    <Appointment />
                                </div>
                                <div className="col-lg-4 pb-3">
                                    <div className="contact-info px-3 py-4" style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${img5})`, backgroundPosition: 'center', backgrounSize: 'cover' }} >
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

            <section className="service-faq py-5">
                <div className="max-width">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                            <div className="service-heading mb-5">
                            <h4> FAQ </h4>
                                    <span className="fw-bold"> General Questions </span>
                                    
                                    {/* <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip
                                    </p> */}
                                </div>
                            </div>
                            <div className="col-lg-6">
                                
                                <div className="accordion text-left" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                1. What is used cooking oil?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>Used Cooking Oil</strong>,
                                                usually shortened as UCO, is oil and fats that have been used for cooking or frying. UCO is usually found in the food processing industry such as restaurants and fast foods, as well as in households.

                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                2. Why we must discard used cooking oil?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                The consumption of Used Cooking Oil (UCO) poses adverse health effects. During frying, several properties of oil are altered, and Total Polar Compounds (TPC) are formed on repeated frying. The toxicity of these compounds may cause several diseases such as hypertension, atherosclerosis, Alzheimer's disease, liver diseases, cancer, heart attack and more
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                3. When should we discard oil?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                It is adviced to discard the oil when it turns dark and murky or the consistency of oil changes. These are some of the indications of deteriorated quality of oil. As a benchmark UCO should not be used after frying for 3 times and should be disposed of responsibly post that
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 4 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse4"
                                                aria-expanded="false"
                                                aria-controls="collapse4"
                                            >
                                                4. Can we pour the oil into washbasin?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading4"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                The cooking oil should never be dumped in the kitchen sink or washbasin as it can congeal and provoke blockages in pipes.
                                                1 litre of UCO can pollute 10,000 litre of water.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 5 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading5">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse5"
                                                aria-expanded="false"
                                                aria-controls="collapse5"
                                            >
                                                5. What will happen if UCO is thrown into water bodies?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading5"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                Throwing UCO into water bodies can severely harm the aquatic and marine life. It has been found to kill the fish, birds, plants and other aquatic life forms by coating them with oily layers, literally reducing their ability to breathe, thus, choking them to death
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 6 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse6"
                                                aria-expanded="false"
                                                aria-controls="collapse6"
                                            >
                                                6. What diseases can arise from the use of used cooking oil?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading6"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                Cooking food by reusing cooking oil can increase free radicals in the body, which can cause inflammation - the root cause of most diseases including obesity, heart disease and diabetes. High inflammation in the body can also reduce immunity and make you prone to infections.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 7 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse7"
                                                aria-expanded="false"
                                                aria-controls="collapse7"
                                            >
                                                7. Does used cooking oil improve the flavour of the food?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse7"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading7"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                It might impart the flavour of the food previously cooked in that oil but repeatedly fried oil is detrimental for human health.  It is advised not to use the oil fried for more than 3 times
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 8 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="heading8">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse8"
                                                aria-expanded="false"
                                                aria-controls="collapse8"
                                            >
                                                8. How to test the oil quality in restaurants?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse8"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading8"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                With the help of oil testers available in market, any restaurant, cloud kitchens can check the quality of oil themselves.
                                                <br />
                                                The steps involved are:
                                                {/* convert this into ul li */}

                                                <ol type="1" >
                                                    <li>Remove the fried product and wait until there are no more bubbles visible in the oil.</li>
                                                    <li>Switch on the cooking oil tester.</li>
                                                    <li>Immerse the cooking oil tester in the hot oil and measure.</li>
                                                    <li>Read off the TPM value - job done.</li>
                                                </ol>

                                                The TPM limit should be in the range of 0-40 TPM. Above that level, the oil is considered unhealthy for consumption.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 9 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse9"
                                                aria-expanded="false"
                                                aria-controls="collapse9"
                                            >
                                                9.  Are there any regulations/laws regarding UCO in restaurants and hotels?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse9"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                Yes, there are several laws and regulations regarding used cooking oil in restaurants and hotels. To know about it all, please visit our <a href="/impact-we-create#FSSAI-guidelines">FSSAI Guidelines</a> section
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                            <div className="col-lg-6">
                                {/* <img src={a1} className="w-100" /> */}
                                <div className="accordion text-left" id="accordionExample1">
                                    {/* Question 10 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse10"
                                                aria-expanded="false"
                                                aria-controls="collapse10"
                                            >
                                                10. What laws apply to uco in other countries?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse10"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                <b>European Union Legislation:</b>
                                                <br />
                                                the EU Directive 2018/851 goes one step forward, defining some crucial aspects related to the life cycle of wastes, including UVOs(used vegetable oils)
                                                <ol type="I">
                                                    <li>A special effort must be pointed toward the enhancement in actions aimed to improve the sustainable transformation of waste-based raw materials, possibly under circular economy models.</li>
                                                    <li>Specific actions must be considered to improve the recycling and re-use of wastes.</li>
                                                    <li>Waste oils must be collected in an exclusive way in order to facilitate their treatment and recycling.</li>
                                                    <li>Concerning the treatment of waste oils, their transformation into added-value products must be preferred with respect to other transformations (e.g., destruction).</li>
                                                </ol>

                                                <b>Italy:</b>
                                                <br />
                                                Currently, the yearly production of UVOs in Italy can be estimated at 260 K tons, partitioned between the foodindustry (36%) and household kitchens (64%).
                                                <br />
                                                The main tasks and targets of the CONOE are the followings:
                                                <br />
                                                <ol type="I">
                                                    <li>To manage and develop, in accordance with the European and National legislations, the systems of collection, transport, storage, treatment, and recycling of used oils and fats.</li>
                                                    <li>When recycling processes cannot be performed, to guarantee the proper disposal procedures. The main aspect considered in the evaluation of the convenience of disposal versus recycling is the sustainability of the entire process, especially in terms of the production of undesired pollutants.</li>
                                                    <li>To manage all the aspects related to the collection, transport, storage, recycling, or disposal of used vegetable oils and fats, to minimize the pollution eventually generated by this waste, the consortium represents a common point of contact for all the companies involved in such aspects. With the target to promote the dissemination of relevant information and to enhance cooperativity among the partners, the CONOE develops activities as market analyses and surveys, publish economic and technical reports, and organizes transversal activities within the partners.</li>
                                                </ol>

                                                <b>Spain:</b>
                                                <br />
                                                Spanish legislation related to the recycling of UVOs is derived from the mandatory adoption of the EU energy and waste policies.
                                                <br />
                                                <ol type="I">
                                                    <li>The Royal Decree 459/2011 [43] follows the instructions of the RED I Directive and set mandatory targets for the use of biofuels for 2011, 2012, and 2013, expressed as minimum energy content, in relation to the energy content of petrol, diesel, and total petrol and diesel sold or consumed.</li>
                                                    <li>Royal Decree 1597/2011 [46] regulates the sustainability criteria for biofuels and bioliquids. The National Sustainability Verification System and the Double Counting mechanism regulates the calculation of biofuels’ production from renewable sources.</li>
                                                    <li>Other important aspects are considered in the law 22/2011 [50] on waste, which transposes the Directive 2008/98/EC. It regulates waste management and transport activities, as well as the authorizations required for waste treatment.</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 11 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse11"
                                                aria-expanded="false"
                                                aria-controls="collapse11"
                                            >
                                                11. What kabadiwala does with UCO?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse11"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Kabadiwals buy used cooking oil from big restaurants and mix it with fresh oil to sell it to street vendors at cost lower than market rate. The food cooked in this oil is detrimental to human health
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 12 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse12"
                                                aria-expanded="false"
                                                aria-controls="collapse12"
                                            >
                                                12. What does Ecoil do after collecting UCO?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse12"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Ecoil gathers UCO from various food business operators and facilitates its conversion to Biodiesel.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 13 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse13"
                                                aria-expanded="false"
                                                aria-controls="collapse13"
                                            >
                                                13. What does oil adulteration mean?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse13"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Adulteration is the action of lowering the quality of a substance by adding another substance to it. When an essential oil is adulterated, it means that a natural or synthetic component or oil that has been used multiple times has been added during the production or distribution process, so the original oil is no longer pure, and the oil quality is now lower.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 14 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse14"
                                                aria-expanded="false"
                                                aria-controls="collapse14"
                                            >
                                                14. Why is food from small street vendors the cheapest?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse14"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Street food is cheap for so many reasons:
                                                <ol>
                                                    <li><strong>Profits:</strong> The vendors keep their profits very low</li>
                                                    <li><strong>Infrastructure cost:</strong> very low cost of infrastructure as most of the shops are built on the roadside with temporary structures (e.g., bamboo, tin covered with polythene sheets, etc.)</li>
                                                    <li><strong>Government:</strong> cost of establishment is almost nil - no GST and other government hassles, nil food license, etc.</li>
                                                    <li><strong>Oil grade:</strong> Lastly, the oil that street vendors use is usually already used oil bought from big restaurants at a very cheap rate, degrading the overall quality of the food.</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 15 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse15"
                                                aria-expanded="false"
                                                aria-controls="collapse15"
                                            >
                                                15. How Ecoil is different from kabadiwala?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse15"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Kabadiwals buy used cooking oil from big restaurants and mix it with fresh oil to sell it to street vendors at cost lower than market rate. The food cooked in this oil is detrimental to human health.  On the other hand Ecoil collects used cooking oil from big restaurants and facilitates its conversion to biodiesel which is a green fuel. Thus Ecoil safeguards both society's health and environment by its actions
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 16 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse16"
                                                aria-expanded="false"
                                                aria-controls="collapse16"
                                            >
                                                16. How can Ecoil help us to contributte to protect environment?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapse16"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Ecoil provides the best price in industry for the purchase of UCO which encourages the restaurant and canteen owners to sell UCO  facilitating the production of biodiesel which is a greener fuel. thus protecting the envioronment.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 17 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse17"
                                                aria-expanded="false"
                                                aria-controls="collapse17"
                                            >
                                                17. What are the benefits of giving oil to Ecoil?

                                            </button>
                                        </h2>
                                        <div
                                            id="collapse17"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Ecoil purchases used cooking oil from restaurants, canteens, cloud kitchens and more souces at a handsome rate. Hence the restaurant owners get the best price for their waste and at the same time, they provide healthy food to their customers.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Question 18 */}

                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapse18"
                                                aria-expanded="false"
                                                aria-controls="collapse18"
                                            >
                                                18. How we can tell our customers that we serve them better food than others?

                                            </button>
                                        </h2>
                                        <div
                                            id="collapse18"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample1"
                                        >
                                            <div className="accordion-body">
                                                Restaurant owners get a certificate after selling their used cooking oil to Ecoil that states that the restaurant supplies healthy food. These restaurants get these certificates because they chose to not consume the unhealthy used cooking oil and rather sell it to authorised companies like Ecoil who would recycle this used cooking oil to biodiesel, a green fuel
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials />

            <Footer />
        </div>
    )

}
export default Services