import React from "react";
import gsap from "gsap";

import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold underline">Hello World</h1>
    </div>
  );
};

export default App;
