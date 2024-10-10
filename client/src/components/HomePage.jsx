import React from "react";
import "../styles/Homepage.scss";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="homepage"
    >
      <section className="hero"></section>
    </motion.div>
  );
};

export default HomePage;
