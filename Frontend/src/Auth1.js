import axios from "axios"
import { useAuthHeader } from "react-auth-kit"


  export default function Auth1()
  {
    const header = useAuthHeader()
    const url = process.env.REACT_APP_APP_SERVER

    const http = axios.create({
        baseURL: url,
        headers: {
            // "Content-type": "application/json",
            Authorization: `${header()}`
        }
      })

      return {
        http,
      }

  }