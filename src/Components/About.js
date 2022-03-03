import React from 'react'
import dots from "../images/dots-bkgd.7f2f0eb8.svg";
import { Typography } from '@mui/material';

function About() {
  return (
    <div className="about">
      <img src={dots} alt="" class="dots"></img>
      <div className="about__content">
        <div className="content__left">
        <h2 class="MuiTypography-root MuiTypography-h2" id="about">About</h2>

        </div>
        <div className="content__right">

        </div>
      </div>
    </div>

  )
}

export default About