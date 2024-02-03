import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Loader from "../Images/Loader/loader.gif"

function Appointment() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [service, setService] = useState("")
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [errors, setErrors] = useState({})
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [allStates, setAllStates] = useState([])


    const url = process.env.REACT_APP_API_URL
    const server = process.env.REACT_APP_APP_SERVER

    useEffect(() => {
        axios.post(`${server}/States/getAllStates`)
            .then(response => {
                console.log("All States", response)
                if (response.data.status == "Success") {
                    setAllStates(response.data.data)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        console.log("name", name, "email", email, "phone", phone, "message", message, "service", service)
        var formData = new FormData();
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('message', message)
        formData.append('service', service)
        formData.append('address', address)
        formData.append('city', city)
        formData.append('state', state)

        axios.post(`${url}/contact/store`, formData)
        .then(res => {
            console.log(res)
            setLoading(false)
            setSuccess(true)
            setError(false)
            setErrors({})
            setName("")
            setEmail("")
            setPhone("")
            setMessage("")
            setService("")
            setAddress("")
            setCity("")
            setState("")
        })
        .catch(err => {
            console.log(err)
            setSuccess(false)
            setLoading(false)
            setError(true)
            setErrors(err.response.data.errors)
        })
        
    }

    return (
        <div>
            <form>
                <div className="contact-form px-lg-3 px-0 text-left">
                    <div className="row">
                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2">Name</label>
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="Full Name"
                                    required=""
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors && errors.name && <div className="text-danger">{errors.name[0]}</div>}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2">Email</label>
                                <input
                                    type="email"
                                    className="form-control p-3"
                                    placeholder="Email Address"
                                    required=""
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors && errors.email && <div className="text-danger">{errors.email[0]}</div>}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2">Telephone</label>
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="Telephone"
                                    required=""
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                {errors && errors.phone && <div className="text-danger">{errors.phone[0]}</div>}
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2">Select Services</label>
                                <select
                                    className="form-select form-select-lg mb-3 p-2 contact-select"
                                    aria-label=".form-select-lg example"
                                    required=""
                                    onChange={(e) => setService(e.target.value)}
                                >
                                    <option value=""> Select a Service </option>
                                    <option value="UCO Collection">UCO Collection</option>
                                    <option value="Green Fuel Supply">Green Fuel Supply</option>
                                    <option value="Food Compliance Solution">Food Compliance Solutions</option>
                                </select>
                                {errors && errors.service && <div className="text-danger">{errors.service[0]}</div>}
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label lable"
                                >
                                    Address
                                </label>
                                <textarea
                                    className="form-control"
                                    required=""
                                    id="exampleFormControlTextarea1"
                                    rows="4"
                                    placeholder="Enter Your Address"
                                    defaultValue={""}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                {errors && errors.address && <div className="text-danger">{errors.address[0]}</div>}
                            </div>
                        </div>



                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2">City</label>
                                <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="City"
                                    required=""
                                    onChange={(e) => setCity(e.target.value)}
                                />
                                {errors && errors.city && <div className="text-danger">{errors.city[0]}</div>}
                            </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                            <div className="contact-form-inner">
                                <label className="lable mb-2"> State </label>
                                <select
                                    className="form-select form-select-lg mb-3 p-2 contact-select"
                                    aria-label=".form-select-lg example"
                                    required=""
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value=""> Select a state </option>
                                    {allStates && allStates.map((state, index) => {
                                        return (
                                            <option key={index} value={state.name}>{state.name}</option>
                                        )
                                    })}
                                </select>
                                {errors && errors.state && <div className="text-danger">{errors.state[0]}</div>}
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="mb-3">
                                <label
                                    htmlFor="exampleFormControlTextarea1"
                                    className="form-label lable"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="form-control controls"
                                    required=""
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    placeholder="Your Message"
                                    defaultValue={""}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                {errors && errors.message && <div className="text-danger">{errors.message[0]}</div>}
                            </div>
                        </div>
                        {success &&
                                    <div className="col-md-12">
                                        {/* bootrstrap alert success with close button */}
                                        <div>
                                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Success!</strong> Your message has been sent successfully. Our team will contact you shortly.
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                }

{error &&
                                    <div className="col-md-12">
                                        {/* bootrstrap alert success with close button */}
                                        <div>
                                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                                <strong>Error!</strong> Something went wrong. Please try again.
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                }
                        <div className="col-lg-12">
                            {loading && 
                            <>
                            <img src={Loader} style={{ width: "20px"}} /> Sending Data
                            </>}
                            <div className="contact-btn">
                                <div onClick={handleSubmit} className="btn btn-appoiment">
                                    Contact Us
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Appointment