import axios from 'axios'
import React from 'react'

export default function SEO() {

    const url = process.env.REACT_APP_API_URL
     async function getTags (page) {

        //  return axios.get(`${url}/seo/page/${page}`)
        //     .then(res => {
        //         console.log("SEO", res.data.seos)
        //         return res.data.seos;
                
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        const seos = await axios.get(`${url}/seo/page/${page}`).then(response => response.data.seos)
        return seos
            
        
    }

  return {getTags}
}
