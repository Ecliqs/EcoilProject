import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import Auth1 from '../Auth1'
import GlobalFunction from "../GlobalFunction"

function Summary({inViewPort}) {

  const [total, setTotal] = useState(0)
  const [redeemed, setRedeemed] = useState(0)
  const [remaining, setRemaining] = useState(0)

  const {http} = Auth1()
  const {fixNumber} = GlobalFunction()

  //get url from env
  const url = process.env.REACT_APP_APP_SERVER

  //create function to convert string to number and fixed upto 2 decimal points
  // const fixNumber = (num) => {
  //   return parseFloat(num).toFixed(2)
  // }

  // const getGreenPoints = () => {
  //   var vendorId = 565
  //   var dateFrom = ""
  //   var dateTo = moment(new Date).format("YYYY-MM-DD")

  //   var formData = new FormData
    
  //   formData.append('dateFrom', dateFrom)
  //   formData.append('dateTo', dateTo)

  //   http.post(`${url}/WebData/getTotalCarbonCredits`, formData)
  //   .then( res => {
  //       console.log("GREEN POINTS", res.data.data.total_sold_weight)
  //       if(res.data.status == "Success")
  //       {
  //         setGreenPoints(fixNumber(res.data.data.total_sold_weight))
  //       }
  //   })
  //   .catch( err => console.log(err) )
  // }

  //create a functions to get redeemed green points

  const getCarbonPointsStatus = () => {
    http.post(`${url}/WebData/carbonCreditStats`)
    .then( res => {
        console.log("Total GREEN POINTS", res.data)
        if(res.data.status == "Success")
        {
          //add fixNumber function berfore setting
          setTotal(fixNumber(res.data.data.totoal_carbon))
          setRedeemed(fixNumber(res.data.data.credit_used))
          setRemaining(fixNumber(res.data.data.remaining_carbon))
          
        }
        
    })
    .catch( err => console.log(err) )
  }

  useEffect(() => {
   
    getCarbonPointsStatus()
  }, [])

  useEffect(() => {
    if(inViewPort){
      if(total != 0 && redeemed != 0 && remaining != 0){
        getCarbonPointsStatus()
      }
    }
  }, [inViewPort])
  

  return (
    <div>
        <div className="summary">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="summary-header">
                        
                        Green Points Generated Till Now
                      </div>
                      <div className="summary-points"> {total} </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="summary-header">
                        {" "}
                        Green Points Redeemed Till Now{" "}
                      </div>
                      <div className="summary-points"> {redeemed} </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="summary-header"> Green Points Remaining </div>
                      <div className="summary-points"> {remaining} </div>
                    </div>
                    <div
                      className="col-lg-3"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <a href="#section3">
                        <button type="button" className="btn btn-for-redeem-now">
                          Redeem Your Green Points
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Summary