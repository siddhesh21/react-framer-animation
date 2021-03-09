import { useState } from "react";
import "./App.css";
// import Drag from "./Drag";
// import { Button } from "@material-ui/core";
// import Animate from "./Animate";
// import KeyFrame from "./KeyFrame";
// import MotionValues from "./MotionValues";
import ViewPort from "./ViewPort";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      {/* <Button onClick={() => setCount(count + 1)} variant="outlined">
        Click Me to Animate
      </Button> */}
      <div className="app__container">
        {/* <Animate /> */}
        {/* <KeyFrame key={count} /> */}
        {/* <Drag /> */}
        {/* <MotionValues /> */}
        <ViewPort />
      </div>
    </div>
  );
}

export default App;
