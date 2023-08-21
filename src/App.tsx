import React from "react";
import { Rating } from "./components/rate";

function App() {
  return (
    <div style={{width: '10000px'}}>
      <Rating onChange={(value) => console.log(value)} />
    </div>
  );
}

export default App;
