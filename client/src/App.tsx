import React from "react";
import Event from "./components/Event";
import data from "./data";

const App: React.FC = () => {
  return (
    <div>
      <Event {...data} />
    </div>
  )
  ;
};

export default App;
