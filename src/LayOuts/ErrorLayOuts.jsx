import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const ErrorLayOuts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] to-[#14233c] flex flex-col justify-center items-center text-center text-white p-6">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="text-[6rem] font-extrabold text-cyan-400 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-3xl font-bold mb-4"
      >
        Oops! Page Not Found
      </motion.h2>

      <p className="text-gray-300 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>

      <Link
        to="/"
        className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all"
      >
        ⬅ Back to Home
      </Link>

      <motion.img
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="404 Illustration"
        className="w-40 mt-10 opacity-80"
      />
    </div>
  );
};

export default ErrorLayOuts;