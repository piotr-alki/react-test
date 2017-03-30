import React from 'react';
import './SliderBanner.scss';

require("file-loader?name=img/[name].[ext]!./../../../img/slider-banner.jpg")

var SliderBanner = React.createClass({
  render:function() {
    return (
      <div className="SliderBanner">
        <div className="SliderBanner-Banner">
          <div className="SliderBanner-BannerContent">
              <h1 className="SliderBanner-BannerTitle">Bonus €100&nbsp;Deposit Or&nbsp;1&nbsp;BTC</h1>
              <p className="SliderBanner-BannerDesc">Here's to fun! On your deposit at Bitwin, a 50% bonus up to €100 or 1 BTC!</p>
              <a href="#" className="Button Button-ButtonSecondary">Check</a>
          </div>
          <img src="img/slider-banner.jpg" alt="" className="SliderBanner-BannerBkg" />
        </div>

        <div className="SliderBanner-Navigation">
          <a href="#" className="ButtonRound Button-ButtonSecondary Button-ButtonMedium">
            <i className="Icon Icon-IconArrowLeft"></i>
          </a>
          <a href="#" className="ButtonRound Button-ButtonSecondary SliderBanner-NavigationNext">
            <i className="Icon Icon-IconArrowRight"></i>
          </a>
        </div>
        <div className="SliderBanner-Paginator">
          <div className="SliderBanner-PaginatorDottedBox">
            <a href="#" className="SliderBanner-PaginatorDotted SliderBanner-PaginatorDottedActive"></a>
            <a href="#" className="SliderBanner-PaginatorDotted SliderBanner-PaginatorDotted"></a>
            <a href="#" className="SliderBanner-PaginatorDotted SliderBanner-PaginatorDotted"></a>
          </div>
          <div className="SliderBanner-PaginatorCount">
            <span className="SliderBanner-PaginatorCount-Active">1</span>
            <sup>/5</sup>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = SliderBanner;