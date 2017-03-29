import React from 'react';
import './SliderBanner.scss';

require("file-loader?name=img/[name].[ext]!./../../../img/slider-banner.jpg")

var SliderBanner = React.createClass({
  render:function() {
    return (
      <div className="SliderBanner">
        <div className="SliderBanner-Banner">
          <div className="SliderBanner-BannerContent">
              <h1 className="SliderBanner-BannerTitle">bonus €100 Deposit or 1 BTC</h1>
              <p className="SliderBanner-BannerDesc">Here's to fun! On your deposit at Bitwin, a 50% bonus up to €100 or 1 BTC!</p>
              <a href="#" className="Button Button-ButtonSecondary">let the game begin</a>
          </div>
          <img src="img/slider-banner.jpg" alt="" className="SliderBanner-BannerBkg" />
        </div>
      </div>
    );
  },
});

module.exports = SliderBanner;