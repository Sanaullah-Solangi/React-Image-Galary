import { useState } from "react";
import "./App.css";
import Intro from "./assets/components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Intro />
    </>
  );
}

export default App;
