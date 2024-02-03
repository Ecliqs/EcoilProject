import React from 'react'

function GlobalFunction() {
  
//create a function to convert string to number and fixed upto 2 decimal points
  const fixNumber = (num) => {
    return parseFloat(num).toFixed(2)
  }

//   return the functions
  return { fixNumber }
}

export default GlobalFunction