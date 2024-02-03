import React, { useState } from "react"
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"
import version from "../../Images/4thversion.png"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom"
import loaderImage from "../../Images/Loader/loader.gif"
import { useSignIn } from "react-auth-kit"
import "../../index.css"
import "../../Responsive.css"
import "../../Style.css"
import SEO from "../../SEO"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { createElement } from "react"

function Login(){

    // set title 
    // document.title = "Ecoil | Login"

    const { getTags } = SEO()
    // getTags("Home")
    const [tags, setTags] = useState([])

    useEffect(() => {
    //   console.log("tags", tags)
        getTags("Login").then(res => setTags(res))
    }, [])

    useEffect(() => {
      console.log("tags", tags)
    }, [tags])

    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const url = process.env.REACT_APP_APP_SERVER
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const signIn = useSignIn()

    const login = () => {
        const formData = new FormData()
        formData.append("mobile", phone)
        formData.append("password", password)
        setLoading(true)
        axios.post(`${url}/login/validate`, formData)
        .then(res => {
            console.log(res.data.data.user)
            var status = res.data.message
            if(status === "LoggedIn Successfully")
            {
                signIn({
                    token: res.data.data.token,
                    expiresIn: res.data.data.expiry,
                    tokenType: "Bearer",
                    authState: res.data.data.user
                })

                setSuccess(true)
                setError(false)
                setLoading(false)                
                // navigate("/dashboard")
                window.location.href = "/dashboard"
            }
            else
            {
                setSuccess(false)
                setError(true)
                setLoading(false)
            }
        })
        .catch(err => {
            console.log(err)
            setSuccess(false)
                setError(true)
                setLoading(false)
        })
    }

    const handleSubmit = (e) => {
            e.preventDefault()
            login()
        }

    return(
        <div>
            <Navbar />

            <Helmet prioritizeSeoTags>
            {tags && tags.map((tag, index) =>                 
                  createElement(tag.tag_name, {...tag.a_json}, tag.content)
            )}
            </Helmet>

            <div className="login" id="padding-top-login">
                <div className="max-width">
                    <div className="container">
                    <form action="#">
                        <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <img
                            src={version}
                            alt="image"
                            className="login-img d-lg-block d-none"
                            />
                        </div>
                        <div className="col-lg-5 py-4">
                            <div className="login-inner shadow pb-5 px-4">
                            <div className="login-heading py-5">
                                <h1>Sign In</h1>
                                <hr />
                            </div>
                            <div className="login-body">
                                {/* <div class="button mb-3 ">
                                            <a href="#"><button class="google-btn form-control"><img src="img/g.webp" alt="icon" > Sign in With Google</button></a>
                                                <h6 class="text-center pt-1">Or </h6>
                                            </div>
                                            <div class="button mb-3">
                                                <a href="#"></a><button class="google-btn form-control"> <img src="img/f.png" alt="icon" class="px-2" >Sign in With Facebook</button></a>
                                            </div> */}
                                <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="Phone Number"
                                    required=""
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                                
                                </div>
                                
                                <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control py-3"
                                    placeholder="Password"
                                    required=""
                                    maxLength={8}
                                    minLength={8}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </div>
                                {error && error &&
                                <div className="text-danger">
                                    Either Mobile or Password is not valid
                                </div>
                                }
                                
                                <div className="col-lg-12 d">
                                <div className="mb-3 text-end login-a">
                                    {/* <a href="forget-password.html">Forgot Password</a> */}
                                </div>
                                </div>
                                <div className="mb-3 text-center">
                                <button className="btn btn-sumbits" onClick={ handleSubmit}>
                                    Login
                                    {loading &&
                                    
                                    <img src={loaderImage} width="30" alt="" />
}
                                </button>
                                </div>
                                <div className="col-lg-12">
                                <div className="mb-3 text-center login-a">
                                    <Link to="/register">
                                    Don't Have an Account ?   Register Now 
                                    </Link>
                                </div>
                                </div>
                            </div>
                            <div className="option" />
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Login