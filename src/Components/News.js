import { Slider } from '@mui/material';
import React from 'react'
import Article from './Article';
import "./Sponsor.css";


function News() {
    var data = this.props.data;
    var newsTemplate;
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if (data.length > 0) {
      newsTemplate = data.map(function (item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      });
    } else {
      newsTemplate = <p>Please add some cards</p>;
    }
  return (
    <div>
        <div className="news">
         <Slider {...settings}>{newsTemplate}</Slider>
         <strong className={"news__count " + (data.length > 0 ? "" : "none")}>
           Total cards: {data.length}
        </strong>
      </div>

    </div>
  )
}

export default News