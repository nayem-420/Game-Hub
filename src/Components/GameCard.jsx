import React from "react";
import { FaStar } from "react-icons/fa";

const GameCard = ({ game }) => {
    const { title, coverPhoto, ratings, developer } = game;
  return (
    <div className="card bg-linear-to-t from-sky-500 to-indigo-500 shadow-sm">
      <figure>
        <img
          className="h-80 w-full object-cover"
          src={coverPhoto}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white text-shadow-lg">
          {title}
        </h2>
        <p className="flex items-center gap-1 font-semibold">
          <FaStar className="text-yellow-400" />
          {ratings}
        </p>
        <div className="card-actions justify-end">
          <h1 className="text-xl text-cyan-100 text-shadow-lg">{developer}</h1>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
