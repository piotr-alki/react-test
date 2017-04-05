import React from 'react';

import CategoryBanner from './CategoryBanner';
import SliderBanner from './SliderBanner';

import './HomePage.scss';


let HomePage = React.createClass({
  render:function() {
    return (
      <div className="HomePage">
        <div className="HomePage-Row">
          <div className="HomePage-ColSlider">
            <SliderBanner />
          </div>
          <div className="HomePage-ColCategory">
            <CategoryBanner />
          </div>
        </div>
      </div>
    );
  },
});

export default HomePage;