import React from "react";
import { FaArrowLeft, FaDownload, FaGamepad, FaStar } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router";
import { motion } from "framer-motion";

const GameDetails = () => {
  const game = useLoaderData();
  const { id } = useParams();
  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = game;
  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        className="bg-gradient-to-br from-blue-950 to-indigo-950 rounded-2xl p-8 shadow-2xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={coverPhoto}
          alt={title}
          className="rounded-xl mb-6 w-full h-[400px] object-cover shadow-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <div className="flex flex-wrap items-center gap-4 mb-6">
          <span className="badge badge-primary badge-lg">
            <FaGamepad className="mr-1" /> {category}
          </span>

          <p className="flex items-center gap-2 text-lg bg-yellow-400/20 px-4 py-2 rounded-full">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{ratings} / 5.0</span>
          </p>

          <p className="text-cyan-300 font-semibold bg-cyan-400/10 px-4 py-2 rounded-full">
            by {developer}
          </p>
        </div>

        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
          {description}
        </p>

        <motion.a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl w-full md:w-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload className="text-xl" /> Download Now
        </motion.a>
      </motion.div>
    </div>
  );
};

export default GameDetails;
