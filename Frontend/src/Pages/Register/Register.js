import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import version from "../../Images/4thversion.png"
import { Link } from 'react-router-dom'
import IndianFlag from "../../Images/Indian_flag.png"
import Loader from "../../Images/Loader/loader.gif"
import { useSpringRef, useTransition, animated } from '@react-spring/web'
import axios from 'axios'
import Okay from "../../Images/Okay.gif"
import ErrorGif from "../../Images/error.gif"
import SEO from '../../SEO'
import { Helmet } from 'react-helmet'
import { createElement } from 'react'

function Register({title = "Register", page = "register"}) {

    // document.title = "Ecoil | " + title

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Register").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    const [phone, setPhone] = useState("")
    const [error, setError] = useState(false)
    const [sendingOtp, setSendingOtp] = useState(false)
    const [formIndex, setFormIndex] = useState(0)
    const [OTP, setOTP] = useState("1234")
    const [enteredOTP, setEnteredOTP] = useState("")
    const [verifyingOTP, setVerifyingOTP] = useState(false)
    const [OTPError, setOTPError] = useState(false)
    const [phoneAutoFocus, setPhoneAutoFocus] = useState(false)
    const [OTPErrorText, setOTPErrorText] = useState("")
    const [OTPVerified, setOTPVerified] = useState(false)
    const [enteredOTPError, setEnteredOTPError] = useState(false)
    const [enteredOTPAutoFocus, setEnteredOTPAutoFocus] = useState(false)

    // Form 3

    const [firmName, setFirmName] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [oilQuantity, setOilQuantity] = useState("")
    const [expectedRate, setExpectedRate] = useState("")
    const [expectedDate, setExpectedDate] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [remarks, setRemarks] = useState("")

    const [form3AutoFocus, setForm3AutoFocus] = useState("")
    const [form3Errors, setForm3Errors] = useState({})
    const [states, setStates] = useState([])
    const [form3Success, setForm3Success] = useState(false)
    const [form3Loading, setForm3Loading] = useState(false)
    const [form3Error, setForm3Error] = useState(false)

    const url = process.env.REACT_APP_APP_SERVER

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
        setPhoneAutoFocus(true)
        setOTPError(false)
    }

    useEffect(() => {
        console.log(OTP)
    }, [OTP])

    const transRef = useSpringRef()
    const transitions = useTransition(formIndex, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    const handleEnteredOTPChange = (e) => {
        setEnteredOTP(e.target.value)
        setEnteredOTPError(false)
        setEnteredOTPAutoFocus(true)
    }

    const next = () => {
        setFormIndex(prev => prev + 1)
    }




    const checkOTP = () => {
        if (enteredOTP == OTP) {
            // setOTPVerified(true)
            setEnteredOTPError(false)
            setVerifyingOTP(true)


            setTimeout(() => {
                setOTPVerified(true)
            }, 2000);

        }
        else {
            setOTPVerified(false)
            setEnteredOTPError(true)
            setVerifyingOTP(false)
        }

    }

    useEffect(() => {
        if (OTPVerified) {
            setTimeout(() => {
                setFormIndex(prev => prev + 1)

            }, 2000);
        }
    }, [OTPVerified])

    useEffect(() => {
        transRef.start()
    }, [formIndex])

    const handleSendOTP = () => {
        // alert("clicked")
        setOTPError(false)

        // phone number validation 10 digits using regex

        if (!phone.match(/^[0-9]{10}$/)) {
            setSendingOtp(false)
            setOTPError(true)
            setOTPErrorText("Please enter a valid phone number.")
            return;
        }

        // new formData
        const formData = new FormData()
        formData.append("phone", phone)
        formData.append("nv", 1)
        setSendingOtp(true)
        axios.post(`${url}/signups/sendOTP`, formData)
            .then(response => {
                console.log(response)
                setSendingOtp(false)
                // setOTP
                setOTPError(false)
                if (response.data.status == "Error") {
                    setOTPError(true)
                    setOTPErrorText(response.data.message)
                }

                if (response.data.status == "Success") {
                    setOTP(response.data.data)
                    setFormIndex(prev => prev + 1)
                }
            })
            .catch(err => {
                setSendingOtp(false)
                setOTPError(true)
                setOTPErrorText("Something went wrong. Try again later.")
                console.log(err)
            })

        // sleep for 2s



    }

    const handleRemarksFocus = (e) => {
        setForm3AutoFocus("remarks")
        const target = e.target;
        setTimeout(() => target.selectionEnd = target.value.length, "");
    }

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
                if(response.data.status == "Success"){
                    setForm3Success(true)
                    setForm3Loading(false)
                    setForm3Error(false)
                    
                }
                else
                {
                    setForm3Error(true)
                    setForm3Success(false)
                    setForm3Loading(false)
                }

                setFormIndex(prev => prev + 1)
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

    const Form1 = ({ style1 }) => {
        return (
            <animated.div style={style1}>
                <div className="login-body mt-5">
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className="mb-3">

                                <div class="input-group mb-3" style={{ width: "100%" }}>
                                    <span class="input-group-text" id="basic-addon1">
                                        <img src={IndianFlag} alt="Indian Flag" style={{ width: "20px" }} />
                                        &nbsp; +91
                                    </span>
                                    <input type="text"
                                        className="form-control py-3"
                                        placeholder="Phone Number"
                                        onChange={(e) => handlePhoneChange(e)}
                                        value={phone}
                                        autoFocus={phoneAutoFocus}
                                    />
                                </div>
                                { }

                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="mt-3">
                                {sendingOtp ?
                                    <button disabled className="btn btn-sumbits">
                                        <img src={Loader} style={{ width: "30px" }} />
                                        Sending OTP...

                                    </button>
                                    :
                                    <button type="submit" onClick={handleSendOTP} className="btn btn-sumbits">
                                        Send OTP

                                    </button>
                                }

                            </div>
                        </div>

                        {OTPError &&
                            <div className="col-lg-12 mt-2">
                                <div>
                                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                        {OTPErrorText}
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* <button className='btn btn-primary btn-sm' onClick={next}>Next</button> */}
                    </div>



                </div>
            </animated.div>

        )
    }

    const Form2 = ({ style1 }) => {
        return (
            <animated.div style={{ ...style1, width: "100%" }} >
                <div className=" mt-5" >
                    <div className='row' >
                        <div className='col-lg-12'>
                            <div className="mb-3">

                                <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">
                                        {/* <img src={IndianFlag} alt="Indian Flag" style={{ width: "20px" }} />
                                        &nbsp; +91 */}
                                        OTP
                                    </span>
                                    <input type="text"
                                        className="form-control py-3"
                                        placeholder="Enter OTP"
                                        onChange={(e) => handleEnteredOTPChange(e)}
                                        value={enteredOTP}
                                        autoFocus={enteredOTPAutoFocus}
                                    />

                                </div>
                                <div>
                                    {enteredOTPError &&
                                        <div className='text-danger text-left'>Entered OTP is incorrect.</div>
                                    }
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-12" >
                            <div className="mt-3">
                                {OTPVerified ? <>
                                    <div style={{ width: "100%", }}>
                                        <img src={Okay} style={{ width: "30px" }} />
                                        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#77B43F" }}>
                                            Verified
                                        </span>
                                    </div>
                                </> :
                                    <>
                                        {verifyingOTP ?
                                            <button disabled className="btn btn-sumbits">
                                                <img src={Loader} style={{ width: "30px" }} />
                                                Verifying OTP...

                                            </button>
                                            :
                                            <button type="submit" onClick={checkOTP} className="btn btn-sumbits">
                                                Verify OTP

                                            </button>
                                        }
                                    </>
                                }
                                {/* <button className='btn btn-primary btn-sm' onClick={next}>Next</button> */}

                            </div>
                        </div>
                    </div>



                </div>
            </animated.div>

        )
    }

    const Form3 = ({ style1 }) => {



        return (
            <>
            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>
            <animated.div style={{ ...style1, width: "100%" }} >
                <div className="" >
                    <div className='row' >
                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>Firm Name</label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="Firm Name"
                                    onChange={(e) => setFirmName(e.target.value)}
                                    value={firmName}
                                    onFocus={() => setForm3AutoFocus("firmName")}
                                    autoFocus={form3AutoFocus == "firmName" ? true : false}

                                />
                                {form3Errors.firmName && <div className='text-danger'>{form3Errors.firmName}</div>}
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>Your Name</label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    onFocus={() => setForm3AutoFocus("name")}
                                    autoFocus={form3AutoFocus == "name" ? true : false}

                                />
                                {form3Errors.name && <div className='text-danger'>{form3Errors.name}</div>}

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>Email</label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    onFocus={() => setForm3AutoFocus("email")}
                                    autoFocus={form3AutoFocus == "email" ? true : false}

                                />
                                {form3Errors.email && <div className='text-danger'>{form3Errors.email}</div>}

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label> Oil Quantity(KG) </label>
                                <input type="number"
                                    className="form-control py-3"
                                    placeholder="Present Quantity"
                                    min={1}
                                    onChange={(e) => setOilQuantity(e.target.value)}
                                    value={oilQuantity}
                                    onFocus={() => setForm3AutoFocus("oilQuantity")}
                                    autoFocus={form3AutoFocus == "oilQuantity" ? true : false}

                                />
                                {form3Errors.oilQuantity && <div className='text-danger'>{form3Errors.oilQuantity}</div>}
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>Expected Rate (₹/KG)</label>
                                <input type="number"
                                    className="form-control py-3"
                                    placeholder="Expected Rate"
                                    min={1}
                                    onChange={(e) => setExpectedRate(e.target.value)}
                                    value={expectedRate}
                                    onFocus={() => setForm3AutoFocus("expectedRate")}
                                    autoFocus={form3AutoFocus == "expectedRate" ? true : false}

                                />
                                {form3Errors.expectedRate && <div className='text-danger'>{form3Errors.expectedRate}</div>}


                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>Expected Date to start*</label>
                                <input type="date"
                                    className="form-control py-3"
                                    placeholder=""
                                    onChange={(e) => setExpectedDate(e.target.value)}
                                    value={expectedDate}
                                    onKeyDown={(e) => e.preventDefault()}
                                    onFocus={() => setForm3AutoFocus("expectedDate")}
                                    autoFocus={form3AutoFocus == "expectedDate" ? true : false}
                                />
                                {form3Errors.expectedDate && <div className='text-danger'>{form3Errors.expectedDate}</div>}

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label> Address* </label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="Address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    onFocus={() => setForm3AutoFocus("address")}
                                    autoFocus={form3AutoFocus == "address" ? true : false}

                                />
                                {form3Errors.address && <div className='text-danger'>{form3Errors.address}</div>}

                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label> City* </label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="City"
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                    onFocus={() => setForm3AutoFocus("city")}
                                    autoFocus={form3AutoFocus == "city" ? true : false}

                                />
                                {form3Errors.city && <div className='text-danger'>{form3Errors.city}</div>}

                            </div>
                        </div>


                        <div className='col-lg-6'>
                            <div className="mb-3 text-left">
                                <label>State*</label>
                                <select className="form-control py-3"
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
                                    className="form-control py-3"
                                    placeholder="Postal Code"
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    value={postalCode}
                                    onFocus={() => setForm3AutoFocus("postalCode")}
                                    autoFocus={form3AutoFocus == "postalCode" ? true : false}

                                />
                                {form3Errors.postalCode && <div className='text-danger'>{form3Errors.postalCode}</div>}


                            </div>
                        </div>

                        <div className='col-lg-12'>
                            <div className="mb-3 text-left">
                                <label>Remarks</label>
                                <input type="text"
                                    className="form-control py-3"
                                    placeholder="Remarks"
                                    row={6}
                                    onChange={(e) => setRemarks(e.target.value)}
                                    value={remarks}
                                    onFocus={handleRemarksFocus}
                                    autoFocus={form3AutoFocus == "remarks" ? true : false}

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



                    </div>
                </div>
            </animated.div>
            </>
        )
    }

    const Form4 = ({ style1 }) => {
        return (
            <animated.div style={{ ...style1, width: "100%" }}>
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
            </animated.div>
        )

    }

    return (
        <div>
            {page == "register" &&
            <Navbar />
        }
            <div className="login" id="padding-top-login">
                <div className="max-width">
                    <div className="container">
                        {/* <form action="#"> */}
                            <div className="row justify-content-center align-items-center">
                                <div className="col-lg-6">
                                    <img
                                        src={version}
                                        alt="image"
                                        className="login-img d-lg-block d-none"
                                    />
                                </div>
                                <div className="col-lg-5 py-4" >
                                    <div className="login-inner shadow pb-5 px-4" style={{ height: "auto" }}>
                                        {page == "register" ?
                                        <div className="login-heading py-5">
                                            <h1>Register</h1>
                                            <hr />
                                            <div className="mb-3 text-center login-a">
                                                <a href="/login">
                                                    Already have an Account ? Login Now
                                                </a>
                                            </div>
                                        </div>
                                        :
                                        <div style={{height: "120px"}}>

                                        </div>
                                        
                                        }
                                        <div className="d-flex align-items-start" style={{ overflowX: "hidden", height: "auto" }}>
                                            {transitions((style, item) => {

                                                switch (item) {
                                                    case 0:
                                                        return <Form1 style1={style} />
                                                        break;
                                                    case 1:
                                                        return <Form2 style1={style} />
                                                        break;
                                                    case 2:
                                                        return <Form3 style1={style} />
                                                        break;
                                                    case 3:
                                                        return <Form4 style1={style} />
                                                        break;

                                                    default:
                                                        break;
                                                }

                                            }

                                            )}
                                        </div>




                                        <div className="option" />
                                    </div>
                                </div>
                            </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>
            {page == "register" &&
            <Footer />
        }
        </div>
    )
}

export default Register