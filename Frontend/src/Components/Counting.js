import React from "react";
import Carbonemissionsaved from '../Images/Carbonemissionsaved.png'
import UCOconvertedtilldate from '../Images/UCOconvertedtilldate.png'
import HappyFamilies from '../Images/HappyFamilies.png'
import FoodBusinessserved from '../Images/FoodBusinessserved.png'

function Counting(){
    return(
        <div>
            <section className="Counting py-5">
                <div className="max-width">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-3 state1 col-6">
                        <div className="state1 counting-inner">
                            <div className="counting-img text-center">
                            <img src={Carbonemissionsaved} />
                            </div>
                            <div className="counting-text text-center mt-2">
                            <h5 className="mb-0">6.9 M kg</h5>
                            <p>Carbon emission saved</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="state2 counting-inner">
                            <div className="counting-img text-center ">
                            <img src={UCOconvertedtilldate} />
                            </div>
                            <div className="counting-text text-center mt-2">
                            <h5 className="mb-0">3 M kg</h5>
                            <p>UCO converted till date</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className="state3 counting-inner">
                            <div className="counting-img text-center counting-img-2 img-count">
                            <img src={HappyFamilies} className="counts" />
                            </div>
                            <div className="counting-text text-center mt-2">
                            <h5 className="mb-0">3 Cr</h5>
                            <p>Happy Families</p>
                            </div>
                        </div>
                        </div>
                        {/* <div className="col-lg-3 col-6">
                        <div className="state4 counting-inner inner-2">
                            <div className="counting-img text-center">
                            <img src={FoodBusinessserved} />
                            </div>
                            <div className="counting-text text-center mt-2">
                            <h5 className="mb-0">8500</h5>
                            <p>Food Business served</p>
                            </div>
                        </div>
                        </div> */}
                        <div className="col-lg-3 col-6">
                                <div className="state3 counting-inner inner-2">
                                    <div className="counting-img text-center counting-img-2 img-count">
                                        <img src={FoodBusinessserved} className="counts" />
                                    </div>
                                    <div className="counting-text text-center mt-2">
                                        <h5 className="mb-0">8500</h5>
                                        <p>Food Business served</p>
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

export default Counting