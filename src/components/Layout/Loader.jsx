import React from "react";
import { HiOutlineCake } from "react-icons/hi";
import { motion } from "framer-motion";

const Loader = () => {
  const options = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      ease: "linear",
      repeat: 2000,
      repeatType: "reverse",
    },
  };
  return (
    <div className="loader">
      <HiOutlineCake />

      <div>
        <motion.p {...options}>Loading...</motion.p>
      </div>
    </div>
  );
};

export default Loader;
