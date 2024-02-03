import React from 'react'
import version from "../Images/4thversion.png"
import RequestForOilCollection2 from './RequestForOilCollection2'

function RFCSection() {
  return (
    <div>
          <section>
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12">
                                <h2> Request for oil collection </h2>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={version} alt="version" className="w-75" />
                            </div>
                            <div className="col-md-6">
                            <RequestForOilCollection2 />

                            </div>
                        </div>

                    </div>
                </section>
    </div>
  )
}

export default RFCSection