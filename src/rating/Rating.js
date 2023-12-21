import React from "react";

const Rating = ({ rating }) => {
  //Declarer un tableau d'etoiles vide (jsx)
  const starList = [];
  //Stocker dans une variable le nombre des toiles pleine
  const starFillCount = Math.floor(rating);
  //Stocker dans une variable si oui ou non il ya des demi etoile
  const hasStarHalf = rating - starFillCount >= 0.5;
  //Stocker dans une variable le nombre d'etoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  //Pusher dans me tableau le nombre d'etoile pleine
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(
      <i className="ri-star-fill text-yellow-500" key={"star-fill" + i}></i>
    );
  }
  //Pusher dans me tableau le nombre des demi etoiles s'il y en a
  if (hasStarHalf) {
    starList.push(
      <i className="ri-star-half-fill text-yellow-500" key={"start-half"}></i>
    );
  }
  //Pusher dans le tableau les etoile vides
  for (let index = 1; index <= emptyStarCount; index++) {
    starList.push(
      <i
        className="ri-star-line text-yellow-500"
        key={"star-empty" + index}
      ></i>
    );
  }
  return <div className="flex flex-row gap-2 mt-4">{starList}</div>;
};

export default Rating;
