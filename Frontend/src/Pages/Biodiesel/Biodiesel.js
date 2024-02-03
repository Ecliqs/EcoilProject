import React from "react";
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
// import biodisel from "../../Images/BioFuelBanner.jpg"
import biodieselclean from "../../Images/bio-diesel-clean-2.png"
import biodieselstructure from "../../Images/bio-diesel-structure-clean.png"
import biodiselproccess from "../../Images/biodisel-proccess-clean.png"
import imgfour from "../../Images/d3.jpg"
import imgfive from "../../Images/d4.jpg"
import imgSix from "../../Images/d5.jpg"
import imgSeven from "../../Images/d6.jpg"
import greenbg from '../../Images/bgcreate.jpg'
import biodisel from '../../Images/sustainable-fuel.jpg'
import SEO from "../../SEO";
import { useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { createElement } from "react";


function Biodiesel(){

    // set title 
    // document.title = "Ecoil | Sustainable Fuel"

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
        getTags("Sustainable Fuel").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    return(
        <div>
            <Navbar />

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>

            <div className="contact-bnner-banner" style={{backgroundImage: `linear-gradient(to right, rgb(8 0 0 / 42%), rgb(0 0 0 / 52%)), url(${biodisel})`, backgroundSize: "cover", backgroundPosition: "center",}}>
                <div className="max-width">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-12">
                        <div className="contact-text">
                        <h1>Sustainable Fuel</h1>
                        <p>
                            Sustainable Fuel is a fuel made from renewable sources such as
                            used cooking oil, municipal waste and woody biomass. It is a
                            safe, proven fuel, which has the potential to reduce lifecycle
                            emissions by up to 80%, compared with conventional fuel.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <section className="industries-we-serve-3 industries-serve py-lg-5 py-3 ">
                <div className="max-width">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 pb-3">
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                        <div className="service-heading mb-3">
                            <h4 className="mb-5" />
                        </div>
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                            <div className="service-heading mb-3">
                            {/* <span>INDUSTRIES</span> */}
                            <h4>What is sustainable fuel?</h4>
                            <p className="UCO_sell_text">
                                "Sustainable fuels replace or greatly reduce the mining or
                                drilling of fossil fuels from below the earth's surface.
                                They are produced from renewable and/or alternative
                                feedstocks, such as plant, vegetable or industrial waste.
                            </p>
                            <p className="UCO_sell_text">
                                Sustainable fuels include biofuels such as hydrotreated
                                vegetable oil (HVO), or bioethanol, Aviation fuel, biodiesel
                                and synthetic fuels (synfuels) such as ammonia or methanol.
                                Sustainable fuels could account for 37% of energy in demand
                                in transportation by 2050"
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-ll pb-3">
                        <div className="industries-img">
                        <img src={biodieselclean} className="w-100" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="industries-we-serve industries-serve py-lg-5 py-3" style={{background:`#E3E3E3`, backgroundPosition: 'center', backgrounSize: 'cover' }}>
                    <div className="max-width">
                    <div className="container">
                        <div className="row align-items-center justify-content-center" >
                        <div className="col-lg-6 col-ll pb-3" >
                            <div className="industries-img">
                            <img src={biodieselstructure} alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-6 pb-3">
                            <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                            <div className="service-heading mb-3">
                                {/* <span>INDUSTRIES</span> */}
                                <h4>Structure of fuel</h4>
                                <p className="text-justify">
                                The basic biodiesel chemical formula is C17H34O2, with the
                            ester group –CO2CH3 at the end of the long carbon chain.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

            {/* <section className="industries-we-serve industries-serve py-lg-5 py-3">
                <div className="max-width">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-ll pb-3">
                        <div className="industries-img">
                        <img
                            src={biodieselstructure}
                            alt=""
                            className="w-100"
                        />
                        </div>
                    </div>
                    <div className="col-lg-6 pb-3">
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                        <div className="service-heading mb-3">
                            <h4>Structure of fuel</h4>
                            <p>
                            The basic biodiesel chemical formula is C17H34O2, with the
                            ester group –CO2CH3 at the end of the long carbon chain.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section> */}

            <section className="industries-we-serve-3 industries-serve py-lg-5 py-3 mb-5">
                <div className="max-width">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 pb-3">
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                        <div className="service-heading mb-3">
                            <h4 className="mb-5" />
                        </div>
                        <div className="industries-serve-inner pb-3 px-lg-4 px-3">
                            <div className="service-heading mb-3">
                            {/* <span>INDUSTRIES</span> */}
                            <h4>How is it produced?</h4>
                            <p className="text-justify">
                                Biodiesel is made when a triglyceride molecule (oil or fat)
                                reacts with 3 molecules of an alcohol (usually methanol or
                                ethanol) to produce 3 molecules of biodiesel (also called
                                “methyl esters” or “ethyl esters”) and one molecule of
                                glycerol. The composition of biodiesel is mostly
                                triglycerides that are classified as esters. The esters are
                                processed through transesterification. Biological oils from
                                vegetable and animal fats — this includes used oils from
                                cooking — react with short-chained alcohols and a catalyst
                                under heated conditions through a process of
                                tranesterification that converts the esters, the long-chain
                                fatty acids, to biodiesel and glycerin.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-ll pb-3">
                        <div className="industries-img">
                        <img src={biodiselproccess} className="w-100" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="container mt-5 mb-5">
                <div className="row justify-content-around">
                <div className="col-lg-5 bg-change">
                    <div className="information align-item-center">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={imgfour} alt="" className="" style={circle} />
                            </div>
                            <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                <h2 className="pic-heading">
                                How much carbon footprint it reduces?
                                </h2>
                                <p className="pic-para">
                                When we talk about a “carbon footprint” we are referring to human
                                activity that produces carbon dioxide (CO2) and thus contributes
                                to climate change - activities like burning fossil fuels for heat,
                                electricity, and transportation. We can reduce our carbon
                                footprint by using biofuels such as biodiesel and ethanol. Because
                                these fuels are made from plants that absorb carbon from the
                                atmosphere as they grow, biofuels add less new carbon dioxide to
                                the atmosphere than do fossil fuels.
                                </p>
                                <p className="pic-para">
                                They can decrease Green House Gases emissions between 56-96%, the
                                equivalent of planting 1.9 billion trees. It can also cut global
                                warming pollution by 80-90% when compared to petroleum diesel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 bg-change">
                    <div className="information align-item-center">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={imgfive} alt="" className="" style={circle} />
                            </div>
                            <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                <h2 className="pic-heading">Global Statistics</h2>
                                <p className="pic-para">
                                Global biodiesel production is projected to increase to 50 bln L
                                by 2030, driven principally by Indonesia’s mandate to increase
                                over the initial projection years. Feedstock for biofuel products
                                vary from country to country. Global biofuel production will
                                continue to be dominated by traditional feedstock despite the
                                increasing sensitivity to the sustainability dimension of biofuel
                                production observed in many countries
                                </p>
                                <p className="pic-para">
                                Since 2000, the share of biodiesel and hydro treated vegetable
                                oils (HVOs) in total biofuel production has increased nearly
                                10-fold, from 3.3% in 2000 to nearly 32% in 2020, but bioethanol
                                still accounts for 2/3 of total production.
                                </p>
                                <p className="pic-para">
                                In 2020, first generation biofuels still covered most of global
                                production, with corn and sugar cane accounting for 64% and 26% of
                                global bioethanol production, respectively, and vegetable oils for
                                77% of global biodiesel production."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="container mt-5 mb-5">
                <div className="row justify-content-around">
                <div className="col-lg-5 bg-change">
                    <div className="information align-item-center">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={imgSix} alt="" className="" style={circle} />
                            </div>
                            <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                <h2 className="pic-heading">Uses of Green fuel</h2>
                                <p className="pic-para">
                                "As biodiesel is known as an alternative to diesel fuel, there are
                                other uses. Many assume that the material is used just for
                                transportation. But biofuel can provide hydrogen, clean up oil,
                                work as cooking oil and more. Biofuels can work as an alternative
                                to replacing energy needs from vehicle fuel to central home
                                heating.
                                </p>
                                <p className="pic-para"></p>
                                <ol className="pic-para">
                                <li>
                                    <b style={{ fontSize: 16 }}>Transportation:</b> <br /> More than
                                    30% of energy consumed in the United States is used for vehicle
                                    transportation. Across the globe, transport takes account of 24%
                                    of energy and more than 60% of absorbed oil. This means that
                                    over a third of oil is used to operate vehicles. biofuel can be
                                    turned into a hydrogen steam that is meant to be used in
                                    adjoining fuel-cell. More major car brands have already invested
                                    in stations for biofuel-powered vehicles.
                                </li>
                                <li>
                                    <b style={{ fontSize: 16 }}>Energy Generation:</b> <br />{" "}
                                    Biofuel can be used to generate power in backup systems where
                                    emission matters most. This includes facilities such as schools,
                                    hospitals and other forms located in residential areas. <br />
                                    In fact, the largest market for biofuel to turn into energy
                                    generation for over 350,000 homes from landfill gas in the
                                    United Kingdom.
                                </li>
                                <li>
                                    <b style={{ fontSize: 16 }}>Provide Heat:</b> <br /> A majority
                                    of biofuel that is used for heating is substantial. As wood is
                                    the most practical method to heat, houses that use wood burning
                                    stoves rather than gas or electricity. A blend of biodiesel will
                                    reduce the emission of both nitrogen and sulphur dioxide.
                                </li>
                                <li>
                                    <b style={{ fontSize: 16 }}>Charging Electronics:</b> <br /> A
                                    fuel cell was developed with cooking oil and sugar to generate
                                    electricity; consumers will be able to use these cells instead
                                    of generating electricity. Consumers may be able to use fuel
                                    cells in place of batteries to charge anything from computers to
                                    cell phones. While they are still in the process of development,
                                    cells have the potential to become a ready source of power.
                                </li>
                                <li>
                                    <b style={{ fontSize: 16 }}>Clean Oil Spills and Grease:</b>{" "}
                                    <br /> Biofuel is known to be environmentally-friendly, biofuel
                                    can also help to clean up oil spills and grease. It has been
                                    tested to work as a potential cleaning agent for areas where
                                    crude oil contaminated the waters. The results have also been
                                    found to increase the recovery areas and allow it to be removed
                                    from the water. Biofuel can also be used as an industrial
                                    solvent for cleaning metal, which is also beneficial due to its
                                    lack of toxic impact.
                                </li>
                                <li>
                                    <b style={{ fontSize: 16 }}>Aviation fuel:</b> <br /> SAF is a
                                    biofuel used to power aircraft that has similar properties to
                                    conventional jet fuel but with a smaller carbon footprint.
                                    Sustainable Aviation Fuel (SAF) can be produced from a variety
                                    of sustainable resources, also known as feedstocks. This
                                    includes forestry and agricultural waste, used cooking oil,
                                    carbon captured from the air, and green hydrogen."
                                </li>
                                </ol>
                                <p />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 bg-change">
                    <div className="information  align-item-center">
                        <div className="row">
                            <div className="col-md-12">
                                <img src={imgSeven} alt="" className="" style={circle} />
                            </div>
                            <div className="pic-text col-lg-12 col-md-12 col-sm-12">
                                <h2 className="pic-heading">
                                Laws/ Global Laws on carbon Foot Print
                                </h2>
                                <p className="pic-para">
                                To ensure as stabile climate and make real on the commitment of
                                the Paris Agreement UNEP has identified six sectors with the
                                potential to reduce emissions enough to keep the world below the
                                1.5°C mark.
                                </p>
                                <p className="pic-para">
                                UNEP has come up with 6 sector solution that can reduce carbon
                                dioxide emissionns and limit the temperature rise to 1.5 degree
                                celcuis.
                                </p>
                                <ol className="pic-para">
                                <li>
                                    In the energy sector we can cut 12.5 gigatonnes of greenhouse
                                    gas emissions annually.
                                </li>
                                <li>
                                    Industry can reduce its emissions by 7.3 GT yearly by embrasing
                                    passive or renewable energy based heating and cooling systems,
                                    improving energy efficiency and adressing other pressing issues,
                                    like methane leaks.
                                </li>
                                <li>
                                    New food production solutions can reduce emissions by 6.7GT a
                                    year. reducing food loss and waste and shifting to more
                                    sustainable diets can reduce emissions by more than 2GT a year.
                                </li>
                                <li>
                                    Connected to our food systems, the world can reduce emissions
                                    5.9 GT annually if it halts deforestation, ecosystem degradation
                                    and restore ecosystems.
                                </li>
                                <li>
                                    We can reduce transport emissions by 4.7GT by using electric
                                    vehicles, using public transport and encouraging people to walk,
                                    cycle and use other forms of non-motorized transport by creating
                                    safe places.
                                </li>
                                <li>
                                    By making the cities and homes of tomorrow fit for a low-carbon
                                    age and by updating exisiting infrastructure, we can reduce
                                    carbon emissions by 5.9GT and ultimately, the carbon footprint!
                                </li>
                                </ol>
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

export default Biodiesel