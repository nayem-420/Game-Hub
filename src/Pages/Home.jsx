import React from "react";
import AutoPlay from "../Components/AutoPlay";
import { NavLink, useLoaderData } from "react-router";
import GameCard from "../Components/GameCard";
import Newsletter from "../Components/Newsletter";
import { motion } from "framer-motion";
import About from "./About";

const Home = () => {
  const games = useLoaderData();
  console.log(games);
  const popularGames = [...games]
    .sort((a, b) => parseFloat(b.ratings) - parseFloat(a.ratings))
    .slice(0, 3);
  return (
    <div className="overflow-x-hidden my-6">
      <title>Game-Hub | Home</title>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AutoPlay />
      </motion.div>

      <div className="px-4 md:px-10 my-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#009dc4]">
          🔥 Popular Games
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularGames.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
            >
              <GameCard game={game} />
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <motion.div whileHover={{ scale: 1.1 }}>
            <NavLink
              to="/games"
              className="bg-[#009dc4] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#007b9e]"
            >
              Show More
            </NavLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Newsletter />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>
    </div>
  );
};

export default Home;
