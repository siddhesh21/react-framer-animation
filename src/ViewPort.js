import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import React, { useEffect, useState } from "react";
import "./ViewPort.css";

function ViewPort() {
  const [isComplete, setIsComplete] = useState(false);

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    yRange.onChange((v) => setIsComplete(v >= 1));
  }, [yRange]);
  console.log(setIsComplete);

  return (
    <div className="viewPort">
      <svg className="progress-icon" viewBox="0 0 60 60">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          strokeDasharray="0 1"
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{
            pathLength,
            rotate: 90,
            translateX: 5,
            translateY: 5,
            scaleX: -1, // Reverse direction of line animation
          }}
        />
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke="white"
          d="M14,26 L 22,33 L 35,16"
          initial={false}
          strokeDasharray="0 1"
          animate={{ pathLength: isComplete ? 1 : 0 }}
          transition={{ duration: 1.25 }}
        />
      </svg>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you</h3>
      <h3>I love you</h3>
      <br /> <br />
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you</h3>
      <h3>I love you</h3>
      <br /> <br />
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you</h3>
      <h3>I love you</h3>
      <br /> <br />
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you</h3>
      <h3>I love you</h3>
      <br /> <br />
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you, baby</h3>
      <h3>And if it's quite all right</h3>
      <h3>I need you, baby</h3>
      <h3>To warm these lonely nights</h3>
      <h3>I love you, baby</h3>
      <h3>Trust in me when I say</h3>
      <h3>I love you</h3>
      <h3>I love you</h3>
    </div>
  );
}

export default ViewPort;
