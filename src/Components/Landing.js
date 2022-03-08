import React from 'react'
import "./Landing.css"
import landingtitle from "../images/JSCOP@4x.png"
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

function Landing() {
  return (
    <div className='landing'>
      <ParallaxProvider>
      <Parallax speed={-50}>
       <img  className='landing__Heading' src={landingtitle} alt="" />
       {/* <h3 className='landing__Heading'> JSCOP</h3> */}
       </Parallax>
       </ParallaxProvider>
    </div>
  )
}

export default Landing