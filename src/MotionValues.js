import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./MotionValues.css";

function MotionValues() {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);
  const tickPath = useTransform(x, [5, 100], [0, 1]);

  return (
    <motion.div style={{ background }}>
      <motion.div
        className="motionValues__inner"
        drag="x"
        animate={{
          scale: [1, 2, 2, 1],
          rotate: [0, 0, 270, 0],
          borderRadius: ["20%", "20%", "50%", "20%"],
        }}
        whileFocus={{ scale: 1.2 }}
        transition={{ duration: 3 }}
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
      >
        <div className="motionValues__box">
          <svg className="progress-icon" viewBox="0 0 50 50">
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{ translateX: 5, translateY: 5 }}
            />
            <motion.path
              fill="none"
              strokeWidth="2"
              stroke={color}
              d="M14,26 L 22,33 L 35,16"
              strokeDasharray="0 1"
              style={{ pathLength: tickPath }}
            />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default MotionValues;
