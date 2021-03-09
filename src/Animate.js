import React from "react";
import { motion } from "framer-motion";

function Animate() {
  return (
    <motion.div
      animate={{ scale: 2 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}

export default Animate;
