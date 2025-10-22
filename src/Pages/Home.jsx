import React from "react";
import AutoPlay from "../Components/AutoPlay";
import { NavLink, useLoaderData } from "react-router";
import GameCard from "../Components/GameCard";

const Home = () => {
  const games = useLoaderData();
  console.log(games);
  const popularGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);
  return (
    <div className="overflow-x-hidden my-6">
      <title>Game-Hub Home</title>
      <AutoPlay></AutoPlay>
      <div className="px-4 md:px-10 my-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#009dc4] text-shadow-blue-950-xl">
          🔥Popular Games
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <NavLink to='/games' className="btn btn-primary">Show More</NavLink>
      </div>
    </div>
  );
};

export default Home;
