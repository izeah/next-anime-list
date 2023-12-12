"use client";

import React, { useState } from "react";
import { PiStarBold, PiStarFill } from "react-icons/pi";

const starEmptyIcon = <PiStarBold className="text-color-accent" size={36} />;

const starFullIcon = <PiStarFill className="text-color-accent" size={36} />;

const StarRatingScore = ({
  count,
  ratingValue,
}: {
  count: number;
  ratingValue: number;
}) => {
  const generateStar = (index: number): React.ReactElement => {
    if (ratingValue > index) {
      return starFullIcon;
    }
    return starEmptyIcon;
  };

  let stars: React.ReactElement[] = [];

  for (let index = 0; index < count; index++) {
    stars.push(<div key={index}>{generateStar(index)}</div>);
  }

  return <div className="flex gap-4">{stars}</div>;
};

export default StarRatingScore;
