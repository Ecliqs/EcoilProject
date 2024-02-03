import React, { useEffect, useState } from 'react'
import truck from "../Images/truck1.png"
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import Auth1 from '../Auth1'

function ProgressTruck() {

    const [progress, setProgress] = useState(0)
    const [requestStatus, setRequestStatus] = useState("")

    const url = process.env.REACT_APP_APP_SERVER

    const isAuthenticated = useIsAuthenticated()
    const {http} = Auth1()

    const getData = () => {
        if(isAuthenticated())
        {
            http.post(`${url}/WebData/getAllCollReq`)
            .then(res => {
                console.log("PROGRESS TRUCK", res.data)
                if(res.data.status == "Success")
                {
                    var l1 = res.data.data.length
                    console.log("PROGRESS TRUCK Data length", l1)
                    var d1 = res.data.data[l1-1]
                    setRequestStatus(d1.request_status)
                }
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    // 10, 45, 70 96

    useEffect(() => {
        switch (requestStatus.toLowerCase()) {
            case "pending":
                setProgress(21)
                break
            case "inprogress":
                setProgress(70)
                break
            case "completed":
                setProgress(100)
                break
            default:
                setProgress(10)
                break

        }
    }, [requestStatus])

    useEffect(() => {
        setTimeout(() => {
            getData()
        }, 2000);
    }, [])

    return (
        <div>

            <div class="process-path pt-5 pb-4" >
                <div class="max-width">
                    <div class="container p-0">
                        <div class="row">
                            <div class="col-lg-12" style={{ textAlign: "left" }}>
                                <h2 class="requestoil-collection">Track Your Oil</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-one pt-4" >
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                    
                        <div className="progress-container">
                        <div className='middle-line'></div>
                            <div
                                className="progress"
                                id="progress"
                                style={{ width: `${progress}%`, overflow: "unset" }}
                            >
                               
                                <div className="image-wrap">
                                    <img src={truck} alt="image" className="Img-responsive" />
                                </div>
                            </div>
                            <div className={`circle ${progress >= 10 ? "active" : ""}`}>1</div>
                            <div className={`circle ${progress >= 45 ? "active" : ""}`}>2</div>
                            <div className={`circle ${progress >= 70 ? "active" : ""}`}>3</div>
                            <div className={`circle ${progress >= 96 ? "active" : ""}`}>4</div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-3">
                                <h4 className="process-label">
                                    Request for Oil Collection
                                </h4>
                            </div>
                            <div className="col-lg-3">
                                <h4 className="process-label">Collection of Oil</h4>
                            </div>
                            <div className="col-lg-3">
                                <h4 className="process-label">Warehouse</h4>
                            </div>
                            <div className="col-lg-3">
                                <h4 className="process-label">Production / Conversion</h4>
                            </div>
                        </div>
                        {/* <button className="btn-track btn-primary" id="prev" disabled="">
                            Prev
                        </button>
                        <button className="btn-track btn-primary" id="next">
                            Next
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressTruck