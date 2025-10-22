import React, { useState } from "react";
import { useLoaderData } from "react-router";
import GameCard from "../Components/GameCard";

const Games = () => {
  const games = useLoaderData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchGames = term
    ? games.filter((game) => game.title.toLowerCase().includes(term))
    : games;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <title>Game-Hub Games</title>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold mb-6">
          All Games{" "}
          <span className="text-sm">({searchGames.length})are found</span>
        </h1>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchGames.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </div>
    </div>
  );
};

export default Games;
