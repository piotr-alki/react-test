import React from 'react';
import './CategoryBanner.scss';

require("file-loader?name=img/[name].[ext]!./../../../img/sports.jpg")

var CategoryBanner = React.createClass({
  render:function() {
    return (
      <div className="CategoryBanner-Row">
        <a href="#" className="CategoryBanner-Banner">
          <img src="img/sports.jpg" alt="" />
          <span className="Button ButtonSecondary">Button</span>
        </a>
      </div>
    );
  },
});

module.exports = CategoryBanner;