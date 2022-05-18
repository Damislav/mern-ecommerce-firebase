import React from "react";
import StarRatings from "react-star-ratings";

const Star = ({ starClick, numberOfStars }) => (
  <>
    <StarRatings
      starDimension="20px"
      starSpacing="2px"
      starHoverColor="red"
      starEmptyColor="red"
      numberOfStars={numberOfStars}
      changeRating={() => starClick(numberOfStars)}
    />
  </>
);

export default Star;
