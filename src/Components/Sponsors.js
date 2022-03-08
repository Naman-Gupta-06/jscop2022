import React from 'react';
import "./Sponsor.css";
import News from './News';


      
      function Sponsors() {
        var cards = [
          {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
            title: "Burgundy Flemming",
            subtitle: "Advertising"
          },
          {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
            title: "Nigel Nigel",
            subtitle: "Sound & Vision"
          },
          {
            image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
            title: "Caspian Bellevedere",
            subtitle: "Accounting"
          }
        ];
        return (
          <div>
             <div className="Sponsors">
        <h3>Cards</h3>
        <News data={cards} />
      </div>
          </div>
        )
      }
      
      export default Sponsors;