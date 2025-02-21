import React from "react";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className=" bg-gray-900 text-white flex flex-col items-center justify-center px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold flex items-center gap-2">
            CricScorer
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            The ultimate cricket scoring app for live match tracking, analytics,
            and more!
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 grid md:grid-cols-3 gap-6 text-center"
        >
          <Feature
            title="Live Scoring"
            desc="Track scores in real-time with ease."
          />
          <Feature
            title="Team Management"
            desc="Manage teams, players, and match settings."
          />
          <Feature
            title="Match Analytics"
            desc="Get detailed insights and stats."
          />
        </motion.div>
      </div>
    </>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold text-yellow-500">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}
