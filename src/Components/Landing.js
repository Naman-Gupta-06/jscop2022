import React from 'react'
import "./Landing.css"
import landingtitle from "../images/JSCOP@4x.png"

function Landing() {
  return (
    <div className='landing'>
       <img  className='landing__Heading' src={landingtitle} alt="" />
       {/* <h3 className='landing__Heading'> JSCOP</h3> */}

    </div>
  )
}

export default Landing