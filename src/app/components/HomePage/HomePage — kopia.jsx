import React from 'react';
import './CategoryBanner.scss';

var CategoryBanner = React.createClass({
  render:function() {
    return (
      <div className="CategoryBanner-Row">
        <a href="#" className="CategoryBanner-Banner">
          <span className="Button ButtonSecondary">Button</span>
        </a>
      </div>
    );
  },
});

module.exports = CategoryBanner;