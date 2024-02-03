import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useAuthUser } from 'react-auth-kit'

function AddressModal({ getAddress }) {

    const [states, setStates] = useState([])
    const [errors, setErrors] = useState({})
    const [success, setSuccess] = useState(false)

    const [showModal, setShowModal] = useState(false)

    const [loading, setLoading] = useState(false)
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState(0)
    const [landmark, setLandmark] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("India")
    const [addressID, setAddressID] = useState(0)
    const [phone, setPhone] = useState("")

    const url = process.env.REACT_APP_API_URL

    const auth = useAuthUser()

    const getStates = () => {
        axios.get(`${url}/states`)
            .then(res => {
                console.log("states", res.data.states)
                setStates(res.data.states)
            })
            .catch(err => console.log(err))
    }

    

    // store address

    const storeAddress = () => {
        setLoading(true)
        const formData = new FormData()
        formData.append("user_id", auth().id)
        formData.append("address1", address1)
        formData.append("address2", address2)
        formData.append("city", city)
        formData.append("pincode", pincode)
        formData.append("landmark", landmark)
        formData.append("state", state)
        formData.append("country", country)
        formData.append("phone", phone)

        axios.post(`${url}/user-address`, formData)
            .then(res => {
                console.log(res.data)
                setLoading(false)
                setSuccess(true)
                getAddress()
                
            })
            .catch(err => {
                console.log(err)
                setErrors(err.response.data.errors)
                setLoading(false)
            })
    }

    const openForm = () => {
        setErrors({})
        setSuccess(false)
        setAddress1("")
        setAddress2("")
        setCity("")
        setPincode(0)
        setLandmark("")
        setState("")
        
    }




    useEffect(() => {
        getStates();
    }, [])

    return (
        <div>
            {/* bootstrap modal always visible */}


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add an Address</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Address Line 1*</label>
                                        <input type="text" onChange={(e) => setAddress1(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Address Line 1" />
                                        {errors && errors.address1 && <div className="text-danger">{errors.address1[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">Address Line 2</label>
                                        <input type="text" onChange={(e) => setAddress2(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Address Line 2" />
                                        {errors && errors.address2 && <div className="text-danger">{errors.address2[0]}</div>}

                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">City*</label>
                                        <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="City" />
                                        {errors && errors.city && <div className="text-danger">{errors.city[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label">State*</label>
                                        <select className='form-control' onChange={(e) => setState(e.target.value)}>
                                            <option value=""> Select a State </option>
                                            {states && states.map((state, index) => {
                                                return <option key={index}>{state.name}</option>
                                            })}

                                        </select>
                                        {errors && errors.state && <div className="text-danger">{errors.state[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label"> PIN Code* </label>
                                        <input type="number" onChange={(e) => setPincode(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="PIN Code" />
                                        {errors && errors.pincode && <div className="text-danger">{errors.pincode[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label"> Landmark </label>
                                        <input type="text" onChange={(e) => setLandmark(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Landmark" />
                                        {errors && errors.landmark && <div className="text-danger">{errors.landmark[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label"> Country* </label>
                                        <input type="text" disabled className="form-control" id="exampleFormControlInput1" value={country} placeholder="Country" />
                                        {errors && errors.country && <div className="text-danger">{errors.country[0]}</div>}

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label"> Phone Number* </label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                                        {errors && errors.phone && <div className="text-danger">{errors.phone[0]}</div>}

                                    </div>
                                </div>

                                {success &&
                                    <div className="col-md-12">
                                        {/* bootrstrap alert success with close button */}
                                        <div>
                                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                <strong>Success!</strong> Your address has been added successfully.
                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                }


                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={storeAddress}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mt-4" style={{ textAlign: "right" }}>
                    <button type="button" onClick={openForm} className="btn btn-primary btn-track" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Address
                    </button>
                </div>

            </div>

        </div>
    )
}

export default AddressModal