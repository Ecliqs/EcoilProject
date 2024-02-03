import React from "react"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import Counting from "../../Components/Counting"
// import ImpactWeImage from "../../Images/impactwe.jpg"
import ImpactWeImage from "../../Images/impact-we-create.jpg"
import GoodHealth from "../../Images/Icon/good-health-and-well-being.png"
import CleanWater from "../../Images/Icon/clean-water-and-sanitation.png"
import Sub1 from "../../Images/sub1.png"
import AffordableEnergy from "../../Images/Icon/affordable-and-clean-energy.png"
import SustainableCities from "../../Images/Icon/sustainable-cities-and-communities.png"
import uco from "../../Images/uco.jpg"
import imgthree from "../../Images/d2.jpg"
import imgone from "../../Images/One.png"
import imgseven from "../../Images/Seven.png"
import imgfive from "../../Images/Five.png"
import imgfour from "../../Images/d1.jpg"
import SEO from "../../SEO"
import { useState } from "react"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { createElement } from "react"



function ImpactWeCreate() {

    // set title 
    // document.title = "Ecoil | Impact We Create"

    const circle = {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
    }

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Impact We Create").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    return (
        <div>
            
            < Navbar />

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>

            <div className="contact-bnner-impact-we-create-1" style={{ backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${ImpactWeImage})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-12">
                                <div className="contact-text">
                                    <h1>Impact We Create</h1>
                                    <p>
                                        By collection of used cooking oil from restaurants and their
                                        conversion to biodiesel, Ecoil is creating a massive positive
                                        impact on the health of the society and the environment. We are
                                        also contributing to Sustainable Development Goals by United
                                        Nations
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5 z-depth-1">
                <section className="dark-grey-text">
                    <div className="row align-items-center pr-lg-5">
                        <div className="col-md-12">
                            <div className="service-heading mb-5 text-center">
                                <h4>SDG (Sustainable Development Goals) we focus on</h4>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 gld-img">
                            <div className="view">
                                <img src={Sub1} className="img-fluid " alt="smaple image" />
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <div className="industries-serve-inner pb-3 ">
                                <div className="service-body service-body3 pb-3 mb-4 d-flex align-items-center flex-column">
                                    <div className="s-icon">
                                        <img src={GoodHealth} alt="sustainable city" />
                                    </div>

                                    <div className="service-text px-lg-4 px-3 mt-3">
                                        <h4 className="text-left">Good Health And Well Being</h4>
                                        <div className="text-justify">
                                            <div className="text-secondary fw-bold">
                                                Ensure healthy lives and promote well-being for all at all
                                                ages.
                                            </div>
                                            <div>
                                                In India, roughly 5.8 million Indians die because of
                                                diabetes, cancer, stroke, heart, and lung diseases every
                                                year. One of the prominent reasons for this disease is the
                                                consumption of "'Used Cooking Oil' which becomes lethal
                                                after repeated frying due to the formation of toxic Total
                                                Polar Compounds. Ecoil is privileged to prevent a massive
                                                population from contracting these deadly diseases by
                                                collecting UCO from restaurant owners and converting it to
                                                biodiesel, a green fuel.
                                            </div>
                                            <div className="fw-bold">
                                                UCO collected for disposal for Ecoil so far- 1.5 million
                                                tonnes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-body service-body1 pb-3 d-flex align-items-center  flex-column">
                                    <div className="s-icon">
                                        <img src={CleanWater} alt="clean water" />
                                    </div>
                                    <div className="service-text px-lg-4 px-3 mt-3 text-justify">
                                        <h4>Clean Water And Sanitation</h4>
                                        <div>
                                            <div className="text-secondary fw-bold">
                                                Ensure availability and sustainable management of water and
                                                sanitation for all targets.
                                            </div>
                                            <div className="text-justify">
                                                If used cooking oil is not disposed of in an environmentally
                                                friendly way, it clogs the sewage lines, adversely affects
                                                aquatic life, and increases the load on water treatment
                                                plants. 1 liter of Used Cooking Oil contaminates 10,000
                                                liters of water. Ecoil collects this Used Cooking Oil and
                                                converts it to biodiesel thus preventing the ill effects on
                                                the environment.
                                            </div>
                                            <div className="fw-bold">
                                                UCO collected so far by Ecoil- 1.5 million tonnes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 glm-img">
                            <div className="view">
                                <img src={Sub1} className="img-fluid" alt="smaple image" style={{ backgroundBlendMode: 'color-burn' }} />
                            </div>
                        </div>
                        <div className="col-md-4 d-flex align-items-center">
                            <div className="industries-serve-inner pb-3 ">
                                {/* <div class="service-heading mb-5">
                            
                            <h4>SDG (Sustainable Development Goals) we focus on</h4>
                            
                            </div> */}
                                <div className="service-body service-body2 pb-3 mb-4 d-flex align-items-center flex-column">
                                    <div className="s-icon">
                                        <img src={AffordableEnergy} alt="affordable energy" />
                                    </div>
                                    <div className="service-text px-lg-4 px-3 mt-3 text-left">
                                        <h4>Affordable And Clean Energy</h4>
                                        <div>
                                            <div className="text-secondary fw-bold">
                                                Ensure access to affordable, reliable, sustainable, and
                                                modern energy for all.
                                            </div>
                                            <div className="text-justify">
                                                The consumption of High-Speed Diesel in the country is
                                                projected to increase to 132 MKL by 2022. At a 5% blending
                                                level, 660 crore liters of biodiesel would be needed.
                                                Biodiesel made from Used Cooking Oil is a renewable source
                                                of energy and a green fuel as it releases 80% lower carbon
                                                emissions and zero sulfur on combustion. Ecoil helps in
                                                generating biodiesel by collecting Used Cooking Oil.
                                            </div>
                                            <div className="fw-bold">
                                                Biodiesel generated using UCO collected by Ecoil so far is
                                                approx. 1.35mn tonnes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-body service-body3 pb-3 mb-4 d-flex align-items-center flex-column">
                                    <div className="s-icon">
                                        <img src={SustainableCities} alt="sustainable city" />
                                    </div>
                                    <div className="service-text px-4 mt-3 text-left">
                                        <h4>Sustainable Cities And Communities</h4>
                                        <div>
                                            <div className="text-justify">
                                                Make cities and human settlements inclusive, safe,
                                                resilient, and sustainable. India generates 62 million
                                                tonnes of waste each year. About 31 million tonnes (50%) of
                                                this is dumped in landfill sites and water bodies. Used
                                                cooking oil is a food waste that is thrown into drains
                                                leading to not only choking and clogging of municipal sewers
                                                but also drastically reducing the efficiency of the Waste
                                                Water Treatment Plants. Ecoil collects this used cooking oil
                                                preventing the environment from its ill effects.
                                            </div>
                                            <div className="fw-bold">
                                                Used cooking oil collected by Ecoil so far is 1.5 million
                                                tonnes.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Counting />

            <section className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center align-items-center mt-5 mb-5">
                    <div className="col-lg-6 text-center">
                        <img src={uco} alt="" className="w-50" />
                    </div>
                    <div className="col-lg-6">
                        <div className="recycle-icon">
                            {/* <i class="fa fa-recycle " aria-hidden="true"></i> */}
                            <h4 className="mt-3">What is Used Cooking Oil(UCO)?</h4>
                            <p className="UCO_sell_text">
                                UCOs, or "Used Cooking Oil," refers to oil and fats that have
                                previously been used in the preparation of food. The common places
                                where you can find UCOs are in the food processing business (such as
                                restaurants and fast food chains) and at home. Vegetable oils
                                including corn oil, canola oil, olive oil, palm oil, etc., and
                                animal fats are both acceptable forms of UCOs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around">
                    <div className="col-lg-5 bg-change">
                        <div className="information  align-item-center">
                            <div className="row">
                                <div className="col-md-12">
                                    <img src={imgfive} alt="" className="" style={circle} />
                                </div>
                                <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                    <h2 className="pic-heading">Harmful Effects of UCO on the body</h2>
                                    <p className="pic-para">
                                        UCOs increase free radicals, which promote inflammation, the root
                                        cause of most ailments like obesity, heart disease, and diabetes.
                                        Inflammation lowers immunity and increases infection risk. Black,
                                        smokey oil-cooked food reheated throughout the day can raise LDL
                                        cholesterol. LDL cholesterol increases heart disease, stroke, and
                                        chest discomfort chances. Reheated frying oil may be causing your
                                        stomach and throat to burn more often. If you have high acidity,
                                        avoid roadside trash and deep-fried meals as they are cooked in
                                        Used Cooking Oil Reheating cooking oil also makes the oil more
                                        carcinogenic, which is cancer-causing. Used Cooking Oil has been
                                        found to be one of the main causes for diseases like Alzeihmer's,
                                        Parkinson's as well. Thus consumption of food cooked in repeatedly
                                        fried oil can be extremely detrimental for human health
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 bg-change">
                        <div className="information  align-item-center flex-lg-column">
                            <div className="row">
                                <div className=" col-md-12" style={{textAlign: 'center'}}>
                                    <img src={imgfour} alt="" className="" style={circle} />
                                </div>
                                <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                    <h2 className="pic-heading">
                                        Harmful Effects of UCO on drains and water bodies
                                    </h2>
                                    <p className="pic-para">
                                        UCO not only clogs and chokes municipal sewers, but it also
                                        decreases the efficiency of Waste Water Treatment Facilities.
                                        Furthermore, when spent oil eventually winds up in natural water
                                        reservoirs, it adversely affects aquatic and marine life. It has
                                        been discovered to kill fish, birds, plants, and other aquatic
                                        life forms by coating them with oily coatings, decreasing their
                                        ability to breathe and ultimately suffocating them to death. It is
                                        also a major contributor to water pollution because of its
                                        well-known capacity to increase the Bio-chemical Oxygen Demand
                                        (BOD). With the general public becoming more aware of the
                                        detrimental effects of re-using cooked oil on human health, an
                                        increasing amount of Used Cooking Oil is being abandoned and
                                        dumped into the environment after each of those lavish feasts thus
                                        harming the envioronment
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row d-flex justify-content-center align-items-center mt-5 mb-5">
            <div class="col-lg-6">
                <img src="img/Six.png" alt="" class="w-100" />
            </div>
            <div class="col-lg-6">
                <div class="recycle-icon">
                
                <h4 class="mt-3">Harmful Effects of UCO on drains and water bodies</h4>
                <p class="UCO_sell_text">
                    UCO not only clogs and chokes municipal sewers, but it also decreases the efficiency of Waste Water
                    Treatment Facilities. Furthermore, when spent oil eventually winds up in natural water reservoirs, it
                    adversely affects aquatic and marine life. It has been discovered to kill fish, birds, plants, and other
                    aquatic life forms by coating them with oily coatings, decreasing their ability to breathe and ultimately
                    suffocating them to death. It is also a major contributor to water pollution because of its well-known
                    capacity to increase the Bio-chemical Oxygen Demand (BOD). With the general public becoming more aware of
                    the detrimental effects of re-using cooked oil on human health, an increasing amount of Used Cooking Oil
                    is being abandoned and dumped into the environment after each of those lavish feasts thus harming the
                    envioronment
                </p>

                </div>
            </div>
            </div> */}
            
                    <div className="row mt-5" id="FSSAI-guidelines">
                        <div className="col-lg-12">
                            <h4 className="m-5">FSSAI guidelines on UCO</h4>
                        </div>
                        <div className="col-lg-6">
                            <img src={imgseven} alt="" className="w-80" />
                        </div>
                        <div className="col-lg-6">
                            <div className="text-left">
                                <h5>For small FBOs</h5>
                                <div className="mt-4">
                                    <ul>
                                        <li>
                                            Do not use same oil for more than three times. It is ideal to use only once.
                                        </li>
                                        <li>
                                            Cooking oil should be iltered frequently to remove food particles.

                                        </li>
                                        <li>
                                            UCO should be disposed when blue-grey smoke appears or tough foam gets formed or
                                            oil becomes dark and murky or the consistency of oil changes. These are some of the
                                            indications that the quality of oil has deteriorated.

                                        </li>
                                        <li>
                                            Do not dispose of the discarded oil in drains/sewerage systems.

                                        </li>
                                        <li>
                                            UCO should be discarded in an environment friendly way preferably by providing it to
                                            the authorized UCO aggregators/collection agencies that are registered with
                                            authorized agencies such as States Biodiesel Boards, Biodiesel Association of India and
                                            other agencies nominated by state government to collect such oil for the manufacture
                                            of biodiesel or any other industrial purpose

                                        </li>
                                        <li>
                                            Keep UCO away from lame, gas cylinders etc.

                                        </li>
                                        <li>
                                            FBOs should refrain from buying UCO for manufacturing their foods products.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-left">
                                <h5 >For big FBOs</h5>
                                <ul className="mt-4">
                                    <li>Cooking oils having developed Total Polar Compounds beyond the limit of 25% are hazardous waste. Discard such edible oil.</li>
                                    <li>Keep the discarded oil in a separate container once it is cooled. Keep headspace while filling. Always label the container to avoid cross contamination.</li>
                                    <li>Do not transfer hot oil to avoid chances of spilling and injury.</li>
                                    <li>Transfer the used cooking oil safely into the collecting drums provided by authorized collection agency.</li>
                                    <li>Keep used cooking oil away from flame, gas cylinders etc.</li>
                                    <li>UCO should be discarded in an environment-friendly way, preferably by providing it to the authorized UCO aggregators/collection agencies that are registered with authorized agencies such as States Biodiesel Boards, Biodiesel Association of India, and other agencies nominated by the state government.</li>
                                    <li>All Food Business Operators should train their staff responsible for handling and disposal of used cooking oil regarding procedures prescribed in this document.</li>
                                    <li>All FBOs whose consumption of edible oils for frying is more than 50 Kg or litres per day.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-left">
                                <h5>
                                    For households
                                </h5>
                                <ul className="mt-4">
                                    <li>At household level, oil once used for frying foods should be filtered and may be used for curry preparation in order to make it economical. Avoid using the same oil for frying.</li>
                                    <li>UCO should be disposed when blue-grey smoke appears or tough foam gets formed or oil becomes dark and murky or the consistency of oil changes. These are some of the indications of deteriorated quality of oil.</li>
                                    <li>Used Cooking Oil should be consumed in a day or two. It should not be stored for longer times as the rate of deterioration is higher in used oil.</li>
                                    <li>Do not refill the fresh oil container with UCO. Store it separately.</li>
                                    <li>In order to dispose small quantities of UCO, mix the oil with an absorbent material, such as sand or sawdust or used towel or paper towel or food scraps to avoid the chances of spillage and then throw it away in dustbins.</li>
                                </ul>


                            </div>
                        </div>

                        {/* <div className="col-lg-6">
                            <div className="recycle-icon">
                               

                                <div className="text-left">
                                    <h5>For small FBOs</h5>
                                    <div>
                                        <ul>
                                            <li>
                                                Do not use same oil for more than three times. It is ideal to use only once.
                                            </li>
                                            <li>
                                                Cooking oil should be iltered frequently to remove food particles.

                                            </li>
                                            <li>
                                                UCO should be disposed when blue-grey smoke appears or tough foam gets formed or
                                                oil becomes dark and murky or the consistency of oil changes. These are some of the
                                                indications that the quality of oil has deteriorated.

                                            </li>
                                            <li>
                                                Do not dispose of the discarded oil in drains/sewerage systems.

                                            </li>
                                            <li>
                                                UCO should be discarded in an environment friendly way preferably by providing it to
                                                the authorized UCO aggregators/collection agencies that are registered with
                                                authorized agencies such as States Biodiesel Boards, Biodiesel Association of India and
                                                other agencies nominated by state government to collect such oil for the manufacture
                                                of biodiesel or any other industrial purpose

                                            </li>
                                            <li>
                                                Keep UCO away from lame, gas cylinders etc.

                                            </li>
                                            <li>
                                                FBOs should refrain from buying UCO for manufacturing their foods products.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="text-left">
                                    <h5>For big FBOs</h5>
                                    <ul>
                                        <li>Cooking oils having developed Total Polar Compounds beyond the limit of 25% are hazardous waste. Discard such edible oil.</li>
                                        <li>Keep the discarded oil in a separate container once it is cooled. Keep headspace while filling. Always label the container to avoid cross contamination.</li>
                                        <li>Do not transfer hot oil to avoid chances of spilling and injury.</li>
                                        <li>Transfer the used cooking oil safely into the collecting drums provided by authorized collection agency.</li>
                                        <li>Keep used cooking oil away from flame, gas cylinders etc.</li>
                                        <li>UCO should be discarded in an environment-friendly way, preferably by providing it to the authorized UCO aggregators/collection agencies that are registered with authorized agencies such as States Biodiesel Boards, Biodiesel Association of India, and other agencies nominated by the state government.</li>
                                        <li>All Food Business Operators should train their staff responsible for handling and disposal of used cooking oil regarding procedures prescribed in this document.</li>
                                        <li>All FBOs whose consumption of edible oils for frying is more than 50 Kg or litres per day.</li>
                                    </ul>
                                </div>

                                <div className="text-left">
                                    <h5>
                                        For households
                                    </h5>
                                    <ul>
                                        <li>At household level, oil once used for frying foods should be filtered and may be used for curry preparation in order to make it economical. Avoid using the same oil for frying.</li>
                                        <li>UCO should be disposed when blue-grey smoke appears or tough foam gets formed or oil becomes dark and murky or the consistency of oil changes. These are some of the indications of deteriorated quality of oil.</li>
                                        <li>Used Cooking Oil should be consumed in a day or two. It should not be stored for longer times as the rate of deterioration is higher in used oil.</li>
                                        <li>Do not refill the fresh oil container with UCO. Store it separately.</li>
                                        <li>In order to dispose small quantities of UCO, mix the oil with an absorbent material, such as sand or sawdust or used towel or paper towel or food scraps to avoid the chances of spillage and then throw it away in dustbins.</li>
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={imgseven} alt="" className="w-100" />
                        </div> */}
                    </div>
                    <div className="col-lg-5 mt-5 bg-change">
                        <div className="information align-item-center">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <img src={imgone} alt="" className="" style={circle} />
                                </div>
                                <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                    <h2 className="pic-heading">What is Biodiesel?</h2>
                                    <div>
                                        <p className="pic-para">
                                            Biodiesel is a renewable, biodegradable fuel that is
                                            manufactured from vegetable oils, animal fats and waste cooking
                                            oil. Due to its biodegradable nature, it is used as a
                                            replacement for fossil diesel fuel. It can also be mixed with
                                            petroleum diesel fuel in any proportion.
                                        </p>
                                        <p className="pic-para">
                                        Research indicates that biodiesel emits 11% less carbon monoxide and 10% less particulate matter than diesel. According to a study done by the Department of Energy and Agriculture, biodiesel reduces net carbon dioxide emissions by 78%. Unlike petroleum diesel, which contains sulfur and carcinogenic benzene, biodiesel is nontoxic and biodegradable.
                                        </p>
                                        {/* <p class="pic-para">
                            For recycling UCO to biodiesel a process called transesterification is carried out. But before that UCO
                            is purified and filtered. Infact UCO, or used cooking oil, is rated based on its colour and clarity and
                            this determines its recycling time as well
                            </p>

                            <p class="pic-para">
                            A big tank cleans and sieves the oil to remove food and other solid trash. Heated oil in the tank
                            separates tiny particles and pollutants that settle at the bottom and can be removed. After cleaning and
                            filtering in the tank, the oil is dispersed into a bigger filtering system until it fulfils biofuel
                            refinery criteria.
                            The oil is nearly biodiesel-ready. This goes through the process of transesterification. Once its done,
                            the UCO is successfully converted to biodiesel.
                            "
                            </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-5 bg-change">
                        <div className="information align-item-center row">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <img
                                        src={imgthree}
                                        alt=""
                                        className=""
                                        style={circle}
                                    />
                                </div>
                                <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                    <h2 className="pic-heading">How is UCO recycled to Biodiesel?</h2>
                                    <p className="pic-para">
                                        For recycling UCO to biodiesel a process called
                                        transesterification is carried out. But before that UCO is
                                        purified and filtered. Infact UCO, or used cooking oil, is rated
                                        based on its colour and clarity and this determines its recycling
                                        time as well
                                    </p>
                                    <p className="pic-para">
                                        A big tank cleans and sieves the oil to remove food and other
                                        solid trash. Heated oil in the tank separates tiny particles and
                                        pollutants that settle at the bottom and can be removed. After
                                        cleaning and filtering in the tank, the oil is dispersed into a
                                        bigger filtering system until it fulfils biofuel refinery
                                        criteria.
                                    </p>
                                    <p className="pic-para">
                                        The oil is nearly biodiesel-ready. This goes through the process
                                        of transesterification. Once its done, the UCO is successfully
                                        converted to biodiesel.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="provide py-lg-5 py-3 mt-5">
                <div className="max-width">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-10">
                                <div className="recycle-icon text-center">
                                    <h4 className="mt-3">
                                        Comparison of Fossil Fuels and Biodiesel in terms of carbon
                                        footprint generated
                                    </h4>
                                    <p className="px-5 pic-para">
                                        Research indicates that biodiesel emits 11% less carbon monoxide
                                        and 10% less particulate matter than diesel. According to a
                                        study done by the Department of Energy and Agriculture,
                                        biodiesel reduces net carbon dioxide emissions by 78%. Unlike
                                        petroleum diesel, which contains sulfur and carcinogenic
                                        benzene, biodiesel is nontoxic and biodegradable.
                                    </p>
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

export default ImpactWeCreate