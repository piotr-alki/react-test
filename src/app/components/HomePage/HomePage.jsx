import React from 'react';

import CategoryBanner from './CategoryBanner';

import './HomePage.scss';


var HomePage = React.createClass({
  render:function() {
    return (
      <div className="HomePage">
        <div className="HomePage-Row">
          <div className="HomePage-ColSlider">
          </div>
          <div className="HomePage-ColCategory">
            <CategoryBanner />
          </div>
        </div>
      </div>
    );
  },
});

module.exports = HomePage;