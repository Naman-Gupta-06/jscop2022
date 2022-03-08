import React from 'react'
import "./Sponsor.css";


function Article() {
    var image = this.props.data.image,
      title = this.props.data.title,
      subtitle = this.props.data.subtitle;
  return (
    <div>
         <figure className="snip1584">
        <img src={image} alt="sponsor" />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href="#sponsor"></a>
      </figure>
    </div>
  )
}

export default Article