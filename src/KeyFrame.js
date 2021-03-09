import React from "react";
import { motion } from "framer-motion";

function KeyFrame() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{ duration: 3 }}
    ></motion.div>
  );
}

export default KeyFrame;
