import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const GameCard = ({ game }) => {
    const { title, coverPhoto, ratings, developer } = game;
  return (
    <motion.div
      className="card bg-blue-900 shadow-lg overflow-hidden"
      whileHover={{
        scale: 1.03,
        rotate: [0, -1, 1, 0],
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <figure className="relative overflow-hidden group">
        <motion.img
          className="h-80 w-full object-cover"
          src={coverPhoto}
          alt={title}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.button
            className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold flex items-center gap-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <FaDownload /> Download
          </motion.button>
        </motion.div>
      </figure>

      <div className="card-body">
        <motion.h2
          className="card-title text-white text-shadow-lg"
          whileHover={{ x: 5 }}
        >
          {title}
        </motion.h2>

        <motion.div className="flex items-center justify-between">
          <motion.p
            className="flex items-center gap-1 font-semibold text-white"
            whileHover={{ scale: 1.1 }}
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaStar className="text-yellow-400" />
            </motion.span>
            {ratings}
          </motion.p>

          <motion.h1
            className="text-sm text-cyan-100 text-shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {developer}
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GameCard;
