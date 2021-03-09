import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./Drag.css";

function Drag() {
  const constraintsRef = useRef(null);
  return (
    <div className="main__container">
      <motion.div
        dragConstraints={{
          top: -100,
          left: -50,
          right: 50,
          bottom: 100,
        }}
      ></motion.div>
      <div className="drag__container">
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag="x" dragConstraints={constraintsRef} />
      </div>
    </div>
  );
}

export default Drag;
