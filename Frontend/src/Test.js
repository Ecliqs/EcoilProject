import axios from 'axios'
import React from 'react'
import { useAuthHeader, useAuthUser } from 'react-auth-kit'

function Test() {

    const auth = useAuthUser()
    const header = useAuthHeader()

const handleClick = () => {
    console.log(auth())
    console.log(header())

    const formData = new FormData()
    formData.append("dateFrom", "2023-04-01")
    formData.append("dateUpto", "2023-08-06")

    axios.post("http://testapp.knparises.com/api/WebData/getCarbonCredits", formData, {
        headers: {            
            "Authorization": `${header()}`
        }
    })
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

  return (
    <div>
        <p>
            <h1 style={{color: "red"}}>Test something</h1>
            Test something</p>
            <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default Test