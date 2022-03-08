import React from 'react'
import dots from "../images/dots-bkgd.7f2f0eb8.svg";
import { Typography } from '@mui/material';

import './About.css'
function About() {
  return (
    <div className="about">
      <img src={dots} alt="" class="dots"></img>
      <div className="about__content">
        <div className="content__left">
        <h2 class="MuiTypography-root MuiTypography-h2" id="about">About</h2>
        <p className='MuiTypography-root MuiTypography-body1' id="cont">Palette ‘21 is the 4th edition of the distinguished design-a-thon conducted yearly by IEEE VIT. While the last three editions witnessed amazing graphic designs , web and app designs, this year we are back with a fun 48 hour long design hack based entirely on the concepts of UI &amp; UX.</p>

        </div>
        <div className="content__right"><img src={dots} alt="" />

        </div>
      </div>
    </div>

  )
}

export default About