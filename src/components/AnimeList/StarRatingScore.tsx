"use client";

import React, { useState } from "react";
import { PiStarBold, PiStarFill } from "react-icons/pi";

const starEmptyIcon = <PiStarBold className="text-color-primary" size={36} />;

const starFullIcon = <PiStarFill className="text-color-accent" size={36} />;

const StarRatingScore = ({
  count,
  anime_mal_id,
  anime_title,
  user_email,
  isAlreadyRated,
  ratingValue,
}: {
  count: number;
  anime_mal_id: number;
  anime_title: string;
  user_email: string;
  isAlreadyRated: boolean;
  ratingValue?: number;
}) => {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [hoverValue, setHoverValue] = useState<number | undefined>(undefined);

  const handleMouseHover = (index: number) => {
    return () => {
      if (value !== undefined || isAlreadyRated) return;
      setHoverValue(index);
    };
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleClick = (index: number) => {
    return async (e: React.MouseEvent<HTMLDivElement>) => {
      if (value !== undefined || isAlreadyRated) return;
      e.preventDefault();
      setValue(index + 1);
      const data = { anime_mal_id, anime_title, user_email, rating: index + 1 };
      const response = await fetch("/api/v1/rating", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      console.log("😎 response data :", responseData);
    };
  };

  const generateStar = (index: number): React.ReactElement => {
    if (hoverValue !== undefined) {
      if (index <= hoverValue) {
        return starFullIcon;
      }
    }
    if (ratingValue !== undefined && ratingValue > index) {
      return starFullIcon;
    }
    if (value !== undefined && value > index) {
      return starFullIcon;
    }
    return starEmptyIcon;
  };

  let stars: React.ReactElement[] = [];

  for (let index = 0; index < count; index++) {
    stars.push(
      <div
        key={index}
        className={`${
          value !== undefined || isAlreadyRated
            ? "cursor-default"
            : "cursor-pointer"
        }`}
        onMouseMove={handleMouseHover(index)}
        onClick={handleClick(index)}
      >
        {generateStar(index)}
      </div>
    );
  }

  return (
    <>
      <h3 className="text-color-primary text-2xl">
        {value !== undefined || isAlreadyRated
          ? "✨ Terima kasih atas ratingnya"
          : "🍕 Ayo berikan rating kamu!"}
      </h3>
      <div className="flex gap-4" onMouseLeave={handleMouseLeave}>
        {stars}
      </div>
    </>
  );
};

export default StarRatingScore;
