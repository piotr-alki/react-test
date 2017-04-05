import React from 'react';
import './CategoryBanner.scss';

import sports from './../../../img/sports.jpg';
import esports from './../../../img/esports.jpg';
import casino from './../../../img/casino.jpg';

let CategoryBanner = React.createClass({
  render:function() {
    return (
      <div className="CategoryBanner-Row">
        <a href="#" className="CategoryBanner-Banner">
          <span className="CategoryBanner-BannerHoverContent">
            <span className="CategoryBanner-BannerHoverBox">
              <span className="CategoryBanner-BannerHoverName">Sports</span>
              <p className="CategoryBanner-BannerHoverDesc">Incredible Word of all Sports in one
                place. Don’t wait, Start Now!</p>
              <span className="Button Button-ButtonPrimary CategoryBanner-BannerButton">
                <span className="CategoryBanner-BannerBtnDesktopText">let the game</span> begin</span>
            </span>
          </span>
          <img src={sports} alt="" className="CategoryBanner-BannerBkg" />
          <h1 className="CategoryBanner-BannerCategoryName">Sports</h1>
        </a>
        <a href="#" className="CategoryBanner-Banner">
          <span className="CategoryBanner-BannerHoverContent">
            <span className="CategoryBanner-BannerHoverBox">
              <span className="CategoryBanner-BannerHoverName">Casino</span>
              <p className="CategoryBanner-BannerHoverDesc">Incredible Word of
              all Sports in one place. Don’t wait, Start Now!</p>
              <span className="Button Button-ButtonPrimary  CategoryBanner-BannerButton">
                <span className="CategoryBanner-BannerBtnDesktopText">let the game</span> begin</span>
            </span>
          </span>
          <img src={casino} alt="" className="CategoryBanner-BannerBkg" />
          <h1 className="CategoryBanner-BannerCategoryName">Casino</h1>
        </a>
        <a href="#" className="CategoryBanner-Banner">
          <span className="CategoryBanner-BannerHoverContent">
            <span className="CategoryBanner-BannerHoverBox">
              <span className="CategoryBanner-BannerHoverName">E-sports</span>
              <p className="CategoryBanner-BannerHoverDesc">Incredible Word of all Sports
              in one place. Don’t wait, Start Now!</p>
              <span className="Button Button-ButtonPrimary  CategoryBanner-BannerButton">
                <span className="CategoryBanner-BannerBtnDesktopText">let the game</span> begin</span>
            </span>
          </span>
          <img src={esports} alt="" className="CategoryBanner-BannerBkg" />
          <h1 className="CategoryBanner-BannerCategoryName">E-sports</h1>
        </a>
      </div>
    );
  },
});

module.exports = CategoryBanner;