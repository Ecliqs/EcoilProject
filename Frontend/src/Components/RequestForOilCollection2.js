import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from "../Images/Loader/loader.gif"
import Okay from "../Images/Okay.gif"
import ErrorGif from "../Images/error.gif"

function RequestForOilCollection2() {

    const [firmName, setFirmName] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [oilQuantity, setOilQuantity] = useState("")
    const [expectedRate, setExpectedRate] = useState("")
    const [expectedDate, setExpectedDate] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [remarks, setRemarks] = useState("")
    const [form3Loading, setForm3Loading] = useState(false)


    const [form3Errors, setForm3Errors] = useState({})
    const [states, setStates] = useState([])
    const [form3Error, setForm3Error] = useState(false)
    const [form3Success, setForm3Success] = useState(false)

    const url = process.env.REACT_APP_APP_SERVER


    const handleForm3Submit = (e) => {
        e.preventDefault()

        setForm3Loading(true)

        var VError = false
        setForm3Errors({})
        var localErrors = {}

        if (firmName == "") {
            localErrors = { ...localErrors, firmName: "Firm Name is required" }
            VError = true
        }
        if (name == "") {
            localErrors = { ...localErrors, name: "Name is required" }
            VError = true
        }

        // regex for validating 10 digits phone number 

        if (phone.match(/^[0-9]{10}$/) == null) {
            localErrors = { ...localErrors, phone: "10 Digits Phone Number is required" }
            VError = true
        }

        if (email == "") {
            localErrors = { ...localErrors, email: "Email is required" }
            VError = true
        }
        if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) == null) {
            localErrors = { ...localErrors, email: "Please enter a valid email" }
            VError = true
        }
        if (isNaN(oilQuantity) || oilQuantity < 0 || oilQuantity == "") {
            localErrors = { ...localErrors, oilQuantity: "Positive Number is required" }
            VError = true
        }
        if (isNaN(expectedRate) || expectedRate < 0 || expectedRate == "") {
            localErrors = { ...localErrors, expectedRate: "Positive Number is required" }
            VError = true
        }
        if (expectedDate == "") {
            localErrors = { ...localErrors, expectedDate: "Date is required" }
            VError = true
        }
        if (address == "") {
            localErrors = { ...localErrors, address: "Address is required" }
            VError = true
        }
        if (city == "") {
            localErrors = { ...localErrors, city: "City is required" }
            VError = true
        }
        if (state == "") {
            localErrors = { ...localErrors, state: "State is required" }
            VError = true
        }
        if (postalCode == "" || postalCode.length != 6 || isNaN(postalCode)) {
            localErrors = { ...localErrors, postalCode: "6 Digits Postal Code is required" }
            VError = true
        }

        if (VError) {
            setForm3Errors(localErrors)
            setForm3Loading(false)
            return;

        }

        const formData = new FormData()
        formData.append("mobile", phone)
        formData.append("nv", 1)
        formData.append("firm_name", firmName)
        formData.append("name", name)
        formData.append("email", email)
        formData.append("oil_quantity", oilQuantity)
        formData.append("expected_rate", expectedRate)
        formData.append("entry_by", expectedDate)
        formData.append("address", address)
        formData.append("city", city)
        formData.append("state_id", state)
        formData.append("postal_code", postalCode)
        formData.append("remarks_option", remarks)

        setForm3Loading(true)

        axios.post(`${url}/signups/submit`, formData)
            .then(response => {
                console.log(response)
                if (response.data.status == "Success") {
                    setForm3Success(true)
                    setForm3Loading(false)
                    setForm3Error(false)

                }
                else {
                    setForm3Error(true)
                    setForm3Success(false)
                    setForm3Loading(false)
                }

                // setFormIndex(prev => prev + 1)
            })
            .catch(err => {
                console.log(err)
            })

        setForm3Loading(false)
    }


    const getStates = () => {
        axios.post(`${url}/States/getAllStates`)
            .then(response => {
                console.log("All States", response)
                if (response.data.status == "Success") {
                    setStates(response.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }




    useEffect(() => {

        getStates()

    }, [])


  return (
    <div>
         <div className='row' >
                                <div className='col-lg-12'>
                                    <div className="mb-3 text-left">
                                        <label>Firm Name* </label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="Firm Name"
                                            onChange={(e) => setFirmName(e.target.value)}
                                            value={firmName}

                                        />
                                        {form3Errors.firmName && <div className='text-danger'>{form3Errors.firmName}</div>}
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>Your Name *</label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="Your Name"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}

                                        />
                                        {form3Errors.name && <div className='text-danger'>{form3Errors.name}</div>}

                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label> Phone Number * </label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder=" Phone Number "
                                            onChange={(e) => setPhone(e.target.value)}
                                            value={phone}
                                        />
                                        {form3Errors.phone && <div className='text-danger'>{form3Errors.phone}</div>}

                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>Email *</label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}

                                        />
                                        {form3Errors.email && <div className='text-danger'>{form3Errors.email}</div>}

                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label> Oil Quantity* (KG) </label>
                                        <input type="number"
                                            className="form-control py-1"
                                            placeholder="Present Quantity"
                                            min={1}
                                            onChange={(e) => setOilQuantity(e.target.value)}
                                            value={oilQuantity}

                                        />
                                        {form3Errors.oilQuantity && <div className='text-danger'>{form3Errors.oilQuantity}</div>}
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>Expected Rate* (₹/KG)</label>
                                        <input type="number"
                                            className="form-control py-1"
                                            placeholder="Expected Rate"
                                            min={1}
                                            onChange={(e) => setExpectedRate(e.target.value)}
                                            value={expectedRate}

                                        />
                                        {form3Errors.expectedRate && <div className='text-danger'>{form3Errors.expectedRate}</div>}


                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>Expected Date to start*</label>
                                        <input type="date"
                                            className="form-control py-1"
                                            placeholder=""
                                            onChange={(e) => setExpectedDate(e.target.value)}
                                            value={expectedDate}
                                            onKeyDown={(e) => e.preventDefault()}
                                        />
                                        {form3Errors.expectedDate && <div className='text-danger'>{form3Errors.expectedDate}</div>}

                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label> Address* </label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="Address"
                                            onChange={(e) => setAddress(e.target.value)}
                                            value={address}

                                        />
                                        {form3Errors.address && <div className='text-danger'>{form3Errors.address}</div>}

                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label> City* </label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="City"
                                            onChange={(e) => setCity(e.target.value)}
                                            value={city}

                                        />
                                        {form3Errors.city && <div className='text-danger'>{form3Errors.city}</div>}

                                    </div>
                                </div>


                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>State*</label>
                                        <select className="form-control py-1"
                                            onChange={(e) => setState(e.target.value)}
                                        >
                                            <option value="">State</option>
                                            {states && states.map((state1, index) => {
                                                return <option key={index} value={state1.id} selected={state1.id == state ? true : false}>{state1.name}</option>
                                            })}

                                        </select>
                                        {form3Errors.state && <div className='text-danger'>{form3Errors.state}</div>}
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="mb-3 text-left">
                                        <label>Postal Code*</label>
                                        <input type="text"
                                            className="form-control py-1"
                                            placeholder="Postal Code"
                                            onChange={(e) => setPostalCode(e.target.value)}
                                            value={postalCode}

                                        />
                                        {form3Errors.postalCode && <div className='text-danger'>{form3Errors.postalCode}</div>}


                                    </div>
                                </div>

                                <div className='col-lg-12'>
                                    <div className="mb-3 text-left">
                                        <label>Remarks</label>
                                        <textarea type="text"
                                            className="form-control py-1"
                                            placeholder="Remarks"
                                            row={6}
                                            onChange={(e) => setRemarks(e.target.value)}
                                            value={remarks}

                                        />


                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    {form3Loading ?
                                        <button type="submit" disabled className="btn btn-sumbits">
                                            <img src={Loader} style={{ width: "30px" }} />
                                            Submitting...
                                        </button>

                                        :
                                        <button type="submit" onClick={handleForm3Submit} className="btn btn-sumbits">Submit</button>

                                    }
                                </div>

                                <div className="col-lg-12">
                                    <div className="mt-2">
                                        <div className="row">
                                            {form3Success &&
                                                <div className="col-lg-12">
                                                    <div>
                                                        <img src={Okay} style={{ width: "60px" }} />
                                                        &nbsp;
                                                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#77B43F" }}>
                                                            Success !
                                                        </span>
                                                    </div>
                                                    <div>
                                                        Your request has been submitted successfully. Our team will contact you
                                                        soon.
                                                    </div>
                                                </div>
                                            }

                                            {form3Error &&
                                                <div className="col-lg-12">
                                                    <div>
                                                        <img src={ErrorGif} style={{ width: "60px" }} />
                                                        &nbsp;
                                                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#c81a1a" }}>
                                                            Error !
                                                        </span>
                                                    </div>
                                                    <div>
                                                        Something went wrong. We are unable to process your request. Please try again later.
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>



                            </div>
    </div>
  )
}

export default RequestForOilCollection2