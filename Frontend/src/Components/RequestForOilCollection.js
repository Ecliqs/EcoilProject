import React, { useState } from 'react'
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit'
import Auth1 from "../Auth1"
import Loader from "../Images/Loader/loader.gif"
import { Link } from 'react-router-dom'
import Register from '../Pages/Register/Register'

function RequestForOilCollection() {

  const auth = useAuthUser()
  const isAuthenticated = useIsAuthenticated()

  const [entered_drums_qty, setEntered_drums_qty] = useState(0)
  const [entered_volume, setEntered_volume] = useState(0)
  const [empty_drums_qty, setEmpty_drums_qty] = useState(0)
  const [notes_for_team, setNotes_for_team] = useState("")
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [successText, setSuccessText] = useState("")
  const [errorText, setErrorText] = useState("")
  const [loading, setLoading] = useState(false)

  const { http } = Auth1()
  const url = process.env.REACT_APP_APP_SERVER

  const handleSubmit = () => {
    setLoading(true)
    setErrors({})
    console.log("entered_drums_qty", entered_drums_qty)
    console.log("entered_volume", entered_volume)
    console.log("empty_drums_qty", empty_drums_qty)
    console.log("notes_for_team", notes_for_team)
    // check if entered_drums_qty is a number and greater than 0
    if (isNaN(entered_drums_qty) || entered_drums_qty <= 0) {
      setErrors({ entered_drums_qty: "Drums quantity must be a number greater than 0" })
      setLoading(false)
      return
    }
    // check if entered_volume is a number and greater than 0
    if (isNaN(entered_volume) || entered_volume <= 0) {
      setErrors({ entered_volume: "Volume must be a number greater than 0" })
      setLoading(false)
      return
    }
    // check if empty_drums_qty is a number and greater than 0
    if (isNaN(empty_drums_qty) || empty_drums_qty <= 0) {
      setErrors({ empty_drums_qty: "Empty drums quantity must be a number greater than 0" })
      setLoading(false)
      return
    }
    // check if notes_for_team is a string

    var formData = new FormData()
    formData.append("entered_drums_qty", entered_drums_qty)
    formData.append("entered_volume", entered_volume)
    formData.append("empty_drums_qty", empty_drums_qty)
    formData.append("notes_for_team", notes_for_team)

    http.post(`${url}/collectionrequests/submit`, formData)
      .then(res => {
        console.log(res.data)
        if (res.data.status === "Success") {
          setSuccess(true)
          setSuccessText(res.data.message)
        }
        else {
          setError(true)
          setErrorText(res.data.message)
        }
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })

  }

  return (
    <div>
      {isAuthenticated() ?
      <section className=" py-4" >
        <div class="max-width">
          {/* <form action="#"> */}
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-10">
                <div class="request-for-oil-heading mb-4">
                  <h4 class="text-center">Request for oil collection</h4>
                </div>
              </div>

              <div class="col-lg-9 shadow">
                <div class="requst-inner row p-5">
                  <div className="col-md-12" >
                    <table className='table table-default' >
                      <tbody >
                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Name:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().name}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Email:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().email}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Phone Number:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().mobile}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Firm Name:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().firm_name}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Address:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().address}
                          </td>
                        </tr>

                        <tr>
                          <td style={{ textAlign: "left" }}>
                            <b>
                              Postal Code:
                            </b>
                          </td>
                          <td style={{ textAlign: "left" }}>
                            {auth().postal_code}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="col-md-6 text-left">
                    <div class="mb-3 ">
                      <label for="name" class="form-label px-1">Entered Drum Quantity</label>
                      <input type="number" min="0" onChange={(e) => setEntered_drums_qty(e.target.value)} class="form-control py-3" placeholder="Entered Drum Quantity" />
                      {errors && errors.entered_drums_qty && <p style={{ color: "red" }}>{errors.entered_drums_qty}</p>}
                    </div>
                  </div>

                  <div class="col-lg-6 text-left">
                    <label for=" Quantity of Oil to be sold" class="form-label px-1">
                      Enter Volume
                    </label>
                    <div class="input-group mb-3">

                      <input type="number" onChange={(e) => setEntered_volume(e.target.value)} class="form-control py-3" placeholder=" Quantity of Oil to be sold" />
                      <div class="input-group-append ">
                        <span class="input-group-text py-3" id="basic-addon2">kg</span>
                      </div>
                    </div>
                    {errors && errors.entered_volume && <p style={{ color: "red" }}>{errors.entered_volume}</p>}

                  </div>

                  <div className="col-md-6 text-left">
                    <div class="mb-3">
                      <label for="name" class="form-label px-1">Empty Drum Quantity</label>
                      <input type="number" min="1" onChange={(e) => setEmpty_drums_qty(e.target.value)} class="form-control py-3" placeholder="Empty Drum Quantity" />
                      {errors && errors.empty_drums_qty && <p style={{ color: "red" }}>{errors.empty_drums_qty}</p>}
                    </div>
                  </div>

                  <div className="col-md-6 text-left">
                    <div class="mb-3">
                      <label for="name" class="form-label px-1">Notes for Team</label>
                      {/* <input type="number" min="1" class="form-control py-3" placeholder="Empty Drum Quantity" /> */}

                      <textarea class="form-control" onChange={(e) => setNotes_for_team(e.target.value)} placeholder="Notes for Team"></textarea>
                    </div>
                  </div>


                  {/* <div class="col-lg-12">
                        <div class="mb-3">
                          <label for="name" class="form-label px-1">Firm Name</label>
                          <input type="text" class="form-control py-3" placeholder="Enter Your Firm Name" />
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="mb-3">
                          <label for=" Contact Person’s Name" class="form-label px-1">
                            Contact Person’s name</label>
                          <input type="text" class="form-control py-3" placeholder=" Contact Person’s name" />
                        </div>
                      </div> */}
                  {/* <div class="col-lg-6">
                        <label for=" Quantity of Oil to be sold" class="form-label px-1">
                          Quantity of Oil to be sold
                        </label>
                        <div class="input-group mb-3">

                          <input type="number" class="form-control py-3" placeholder=" Quantity of Oil to be sold" />
                          <div class="input-group-append ">
                            <span class="input-group-text py-3" id="basic-addon2">kg</span>
                          </div>
                        </div>
                      </div> */}
                </div>

                {/* <div class="requst-inner row " style={{paddingLeft: "40px", paddingRight: "40px"}}>
                      
                      <div class="col-lg-12"> 
                      <div class="mb-2" >
                        Address 
                      </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Your Street Number" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Area" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Landmark" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Enter Your City" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Enter Your State" />
                        </div>
                      </div>
                      <div class="col-lg-4">
                        <div class="mb-3">
                          
                          <input type="text" class="form-control py-3" placeholder="Enter Your Pin Code" />
                        </div>
                      </div>

                      
                    </div> */}

                <div className="row">
                  <div className="col-lg-12">
                    {success &&
                      <div>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                          <strong>Success!</strong> Your address has been added successfully.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      </div>
                    }
                    {error &&
                      <div>
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                          <strong>Error!</strong> {errorText}.
                          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                      </div>
                    }
                  </div>
                </div>


                <div className=" row mb-4 ">
                  <div className="col-lg-12 col-md-12 col-sm-12 text-center" >
                    
                    {loading ?
                      <div style={{ textAlign: "center" }}>
                        <img src={Loader} width="30" /> Submitting...
                      </div>
                      :
                      <button onClick={handleSubmit} className="btn btn-banner px-5" style={{marginLeft: "0"}}>Submit</button>
                    }
                  </div>
                </div>
              </div>
            </div>


          </div>
          {/* </form> */}
        </div>
      </section>
       :
      <div>
      <div className="container mt-5 mb-5">
          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="heading text-center mb-5">
                      <h4> Request for oil collection </h4>
                  </div>
              </div>
          </div>

          <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <div className="heading text-center mb-5">
                      <div className='text-muted'> Please Login to enable the "Request for Oil Collection" form </div>
                  </div>
              </div>

              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{textAlign: "center"}}>
                  <Link to="/login" className='btn btn-service'>Login</Link>
              </div>
          </div>
          {/* <Register title="Home" page="Home"/> */}
      </div>

      
  </div>
    }
    </div>
  )
}

export default RequestForOilCollection